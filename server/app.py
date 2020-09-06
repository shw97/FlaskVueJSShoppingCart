from flask import Flask, jsonify
from flask_cors import CORS
DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources = {r'/*': {'origins': '*'}})

#Connection to postgres database
import sqlalchemy as db
import pandas as pd
import numpy as np
from sqlalchemy.types import Integer, Text, String, DateTime

engine = db.create_engine('postgresql://shwetha@localhost/ordersdata') 
connection = engine.connect()
metadata = db.MetaData()

delivery = 'delivery'
order_items = 'order_items'
orders = 'orders'
metadata.create_all(engine) 
delivery_df = pd.read_csv('test_data/Test task - Postgres - deliveries.csv')
delivery_dict = delivery_df.to_dict(orient="records")
orderItems_df = pd.read_csv('test_data/Test task - Postgres - order_items.csv')
orders_df = pd.read_csv('test_data/Test task - Postgres - orders.csv')



delivery_df.to_sql(
    delivery,
    engine,
    if_exists='replace',
    index=False,
    chunksize=500,
    dtype={
        "id": Integer,
        "order_item_id": Integer,
        "delivery_quantity": Integer,
    }
)

orderItems_df.to_sql(
    order_items,
    engine,
    if_exists='replace',
    index=False,
    chunksize=500,
    dtype={
        "id": Integer,
        "order_id": Integer,
        "price_per_unit": Integer,
        "quantity":  Integer,
        "product": String(50)
    }
)

orders_df.to_sql(
    orders,
    engine,
    if_exists='replace',
    index=False,
    chunksize=500,
    dtype={
        "id": Integer,
        "created_at": DateTime,
        "order_name": String(50),
        "customer_id":  String(50)
    }
)
order_items = db.Table('order_items', metadata, autoload=True, autoload_with=engine)
query_order_items = db.select([order_items])

ResultProxy_order_items = connection.execute(query_order_items)
ResultSet_order_items = ResultProxy_order_items.fetchall()
# print ResultSet
df_order_items = pd.DataFrame(ResultSet_order_items)
df_order_items.columns = ResultSet_order_items[0].keys()

orders = db.Table('orders', metadata, autoload=True, autoload_with=engine)
query_orders = db.select([orders])

ResultProxy_orders = connection.execute(query_orders)
ResultSet_orders = ResultProxy_orders.fetchall()
# print ResultSet
df_orders = pd.DataFrame(ResultSet_orders)
df_orders.columns = ResultSet_orders[0].keys()

delivery = db.Table('delivery', metadata, autoload=True, autoload_with=engine)
query_delivery = db.select([delivery])

ResultProxy_delivery = connection.execute(query_delivery)
ResultSet_delivery = ResultProxy_delivery.fetchall()
# print ResultSet
df_delivery = pd.DataFrame(ResultSet_delivery)
df_delivery.columns = ResultSet_delivery[0].keys()


#Connection to postgres database ended
#Connection to mongodb

import pandas as pd
import pymongo
from pymongo import MongoClient
# Making a Connection with MongoClient
client = MongoClient("mongodb://localhost:27017/")
# database
db = client["orders_database"]
# collection
customer_companies= db["customer_companies"]
data_customer_companies = pd.read_csv('test_data/Test task - Mongo - customer_companies.csv')
data_customer_companies.reset_index(inplace=True)
data_customer_companies_dict = data_customer_companies.to_dict("records")
customer_companies.insert_one({"index":"customer_companies","data":data_customer_companies_dict})

# collection
customers= db["customers"]
data_customers = pd.read_csv('test_data/Test task - Mongo - customers.csv')
data_customers.reset_index(inplace=True)
data_customers_dict = data_customers.to_dict("records")
customers.insert_one({"index":"customers","data":data_customers_dict})

data_from_companiesdb = customer_companies.find_one({"index":"customer_companies"})
df_companies = pd.DataFrame(data_from_companiesdb["data"])


data_from_customerdb = customers.find_one({"index":"customers"})
df_customers = pd.DataFrame(data_from_customerdb["data"])

# - Order name
# - Customer Company name
# - Customer name
# - Order date (Melbourne/Australia TZ)
# - Delivered amount (dash if nothing is delivered)
# - Total amount

#Connection to mongodb ended

df = df_orders
del df['id']
df["company_name"] = ''
df_customers["company_name"] = ''

for index, row in df_customers.iterrows():
    for index2, row2 in df_companies.iterrows():
        if(row['company_id'] == row2['company_id']):
            df_customers.at[index,'company_name'] = row2['company_name']

for index, row in df.iterrows():
    for index2, row2 in df_customers.iterrows():
        if(row['customer_id'] == row2['user_id']):
            # print "Inside if"
            df.at[index,'company_name'] = row2['company_name']
            # row['company_name'] = row2['company_id']
            # print row['company_name']
# print "Search company name"
# for index, row in df.iterrows():
#     for index2, row2 in df_companies.iterrows():
#         print row['company_name']
#         # print index
#         if(row['company_name'] == row2['company_id']):
#             # print "IF"
#             df.at[index,'company_name'] = row2['company_name']

Row_list =[] 
  
# Iterate over each row 
for index, rows in df.iterrows(): 
    # Create list for the current row 
    my_dict ={"Order_name":rows.order_name, 
                "Customer_Company":rows.company_name,
                "Customer_name":rows.customer_id,
                "Order_date":rows.created_at
                }
      
    # append the list to the final list 
    Row_list.append(my_dict) 
  
# Print the list 
print Row_list
# ORDERS = [
#     {
#         'Order_name': '#C19190',
#         'Customer_Company': 'Sony Ericson',
#         'Customer_name': 'Dr. Harold Senger',
#         'Order_date': 'Apr 23rd, 4:18 AM',
#         'Delivered_Amount': '$99.11',
#         'Total_Amount':'$99.11'
#     },
#     {
#         'Order_name': '#C19191',
#         'Customer_Company': 'Sony Bravia',
#         'Customer_name': 'Dr. Jeremy Renner',
#         'Order_date': 'May 23rd, 12:00 AM',
#         'Delivered_Amount': '$199.11',
#         'Total_Amount':'$199.11'
#     },
#     {
#         'Order_name': '#C19192',
#         'Customer_Company': 'LG',
#         'Customer_name': 'Ms. Green',
#         'Order_date': 'Jun 23rd, 4:18 AM',
#         'Delivered_Amount': '$200',
#         'Total_Amount':'$200'
#     }
# ]
ORDERS = Row_list
@app.route('/ping',methods=['GET'])
def ping_pong():
	return jsonify('pong!')

@app.route('/orders', methods=['GET'])
def all_books():
	return jsonify({
		'status':'success',
		'orders':ORDERS
		})

if __name__ == '__main__':
	app.run(debug=True, use_reloader=False)
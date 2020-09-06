<template>
<div id="search">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
  </div>
  <div class="wrapper">
    <div class="card" v-for="post in filteredList" :key="post">
      <a v-bind:href="post.link" target="_blank">
        <img v-bind:src="post.img"/>
        <small>posted by: {{ post.author }}</small>
        {{ post.title }}
      </a>
    </div>
  </div>
</div>
</template>

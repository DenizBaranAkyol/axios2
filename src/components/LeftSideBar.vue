<template>
  <div class="container">

    <li id="APP" class="list-group-item ">
      <i class="fa-solid fa-person-circle-check"></i> APP
    </li>

    <ul class="list-group">
      <router-link tag="li" class="list-group-item" :to="{ name: 'posts', params: { posts: posts, name: 'posts' } }">
        <a> <i class="fa-regular fa-address-card"></i> posts</a></router-link>

      <router-link tag="li" class="list-group-item"
        :to="{ name: 'comments', params: { comments: comments, name: 'comments' }, }">
        <a> <i class="fa-solid fa-comment"></i> Comments</a></router-link>

      <router-link tag="li" class="list-group-item" :to="{ name: 'albums', params: { albums: albums, name: 'albums' }, }">
        <a> <i class="fa-solid fa-photo-film"></i> albums</a></router-link>

      <router-link tag="li" class="list-group-item" :to="{ name: 'photos', params: { photos: photos, name: 'photos' }, }">
        <a> <i class="fa-solid fa-image"></i> photos</a></router-link>

      <router-link tag="li" class="list-group-item" :to="{ name: 'todos', params: { todos: todos, name: 'todos' }, }">
        <a> <i class="fa-solid fa-list"></i> todos</a></router-link>

      <router-link tag="li" class="list-group-item" :to="{ name: 'users', params: { users: users, name: 'users' }, }">
        <a> <i class="fa-solid fa-user"></i> users</a></router-link>

    </ul>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  beforeCreate() {


    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.posts = response.data;

      })
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => {
        this.comments = response.data;

      })
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then(response => {
        this.albums = response.data;

      })
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => {
        this.todos = response.data;

      })
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => {
        this.photos = response.data;

      })
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        this.users = response.data;

      })

  },



  data() {
    return {
      gelenData: null,
      photos: null,
      todos: null,
      posts: null,
      comments: null,
      albums: null,
      users: null,
    }
  }
}
</script>

<style scoped>
li {
  border-radius: 5px;
  margin: 10px;
  background-color: #c4dcd3;
  font-family: "Josefin Sans";
  font-size: 22px;
}

#APP {
  height: 80px;
  border-radius: 10px;
  background-color: #dbeadd;
}
</style>
<template>
  <div>
    <button class="btn btn-success" @click="navigateToHome">Go home</button>

    <table class="table table-hover table-success table-striped">
      <thead>
        <tr>
          <th v-for="keys in  Object.keys(this.gelenData[0])" scope="col">{{ keys }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in  gelenData ">

          <th v-if="user.userId != null" scope="row"> {{ user.userId }}</th>
          <td v-if="user.postId != null">{{ user.postId }}</td>
          <td v-if="user.id != null">
            <router-link tag="button" class="btn btn-primary"
              :to="{ name: 'userDetail', params: { id: data, data: gelenData } }">
              <button @click="data = user.id" class="btn btn-primary">Kullanıcı Bilgileri {{
                user.id
              }}</button></router-link>
          </td>
          <td v-if="user.title != null">{{ user.title }}</td>
          <td v-if="user.name != null">{{ user.name }}</td>
          <td v-if="user.username != null">{{ user.username }}</td>
          <td v-if="user.email != null">{{ user.email }}</td>
          <td v-if="user.body != null">{{ user.body }}</td>
          <td v-if="user.address != null">
            @{{
              user.address.street +
              " " +
              user.address.suite +
              " " +
              user.address.city +
              " " +
              user.address.zipcode
            }}
          </td>
          <td v-if="user.phone != null">{{ user.phone }}</td>
          <td v-if="user.website != null">{{ user.website }}</td>
          <td v-if="user.company != null">{{ user.company }}</td>
          <td v-if="user.thumbnailUrl != null">{{ user.thumbnailUrl }}</td>
          <td v-if="user.albumId != null">{{ user.albumId }}</td>
          <td v-if="user.url != null">
            <img v-bind:src="user.url" width="50px" height="50px" alt="" />
          </td>
          <td v-if="user.completed != null">
            <input v-if="user.completed" type="checkbox" name="" id="" checked />
            <input v-else type="checkbox" name="" id="" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { RouterView } from "vue-router";

import axios from 'axios';
export default {

  computed: {
    result: function () {
      return axios.get(`https://jsonplaceholder.typicode.com/users?id=${this.data}`).then(response => {
        this.userDetail = response.data;

      })

    }
  },


  methods: {
    navigateToHome() {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      gelenData: null,
      show: false,
      data: null,
      userDetail: null

    }
  },

  created() {
    if (this.$route.params.name == "posts") {
      this.gelenData = this.$route.params.posts
    }
    else if (this.$route.params.name == "comments") {
      this.gelenData = this.$route.params.comments
    }
    else if (this.$route.params.name == "albums") {
      this.gelenData = this.$route.params.albums
    }
    else if (this.$route.params.name == "photos") {
      this.gelenData = this.$route.params.photos
    }
    else if (this.$route.params.name == "users") {
      this.gelenData = this.$route.params.users

    }
    else if (this.$route.params.name == "todos") {
      this.gelenData = this.$route.params.todos
    }

  },

}
</script>

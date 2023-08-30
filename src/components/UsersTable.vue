<template>
  <div>
    <router-link class="btn btn-success" tag="button" to="home">Go Home</router-link>
    <!-- ------------------------------------------------------------------------------------- -->

    <h1>{{ data }} {{ userDetail }} {{ result }}</h1>

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


          <td v-if="user.id != null"> <button @click="data = user.id, get" class="btn btn-primary">Get User Data</button>
            {{
              user.id
            }}
          </td>




          <td v-if="user.title != null">{{ user.title }}</td>
          <td v-if="user.name != null">{{ user.name }}</td>
          <td v-if="user.username != null">{{ user.username }}</td>
          <td v-if="user.email != null">{{ user.email }}</td>
          <td v-if="user.body != null">{{ user.body }}</td>
          <!-- <td v-if="user.address != null">{{ user.address }}</td> -->


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

    <!-- ------------------------------------------------------------------------------------------------- -->

    <!-- <table v-show="show" class="table table-hover table-success table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">Adress</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in gelenData">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>@{{ user.email }}</td>
          <td>
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
        </tr>
      </tbody>
    </table> -->





    <!-- --------------------------------------------------------------------------------------------------------- -->
  </div>
</template>

<script>

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
    get() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users?id=${this.data}`)
        .then(response => {
          this.userDetail = response.data;

        })
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

  // updated() {

  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/users?id=${this.data}`)
  //     .then(response => {
  //       this.userDetail = response.data;
  //       console.log(this.userDetail);
  //     })
  // }

}
</script>

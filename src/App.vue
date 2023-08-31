<template>
  <div class="container-fuild" id="app">
    <div class="row">

      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { RouterView } from "vue-router";
import UsersTable from "./components/UsersTable.vue";

export default {
  components: {
    RouterView,
    UsersTable
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#p {
  text-align: center;
  padding-top: 25px;
  font-size: x-large;
}

#leftSideBar {
  background-color: #dbeadd;
}

#header {
  margin-left: -15px;
  background-color: #d9d9d9;
}

#tables {
  background-color: #d9d9d9;
}
</style>

import Home from "./components/Home.vue";
import UsersTable from "./components/UsersTable";

export const routes = [
  {
    path: "/home",
    name: "home",

    components: { default: Home, home: Home }
  },

  {
    path: "/posts",
    name: "posts",
    components: { default: UsersTable, user: UsersTable }
  },
  {
    path: "/comments",
    name: "comments",
    components: { default: UsersTable, user: UsersTable }
  },
  {
    path: "/albums",
    name: "albums",
    components: { default: UsersTable, user: UsersTable }
  },
  {
    path: "/photos",
    name: "photos",
    components: { default: UsersTable, user: UsersTable }
  },
  {
    path: "/todos",
    name: "todos",
    components: { default: UsersTable, user: UsersTable }
  },
  {
    path: "/users",
    name: "users",
    components: { default: UsersTable, user: UsersTable }
  },

  {
    path: "*",
    components: { default: Home, home: Home }
  }
];

import Home from "./components/Home.vue";
import UsersTable from "./components/UsersTable";
import UserDetail from "./components/UserDetail";

export const routes = [
  {
    path: "/home",
    name: "home",

    components: { default: Home, home: Home }
  },

  {
    path: "/userDetail",
    name: "userDetail",

    components: { default: UserDetail, UserDetail: UserDetail }
  },

  {
    path: "/posts",
    name: "posts",
    components: { default: UsersTable, user: UsersTable },
    children: [
      // { path: ":id/userDetail", component: UserDetail, name: "userDetail" },
      { path: ":id", component: UserDetail, name: "userDetail" }
    ]
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

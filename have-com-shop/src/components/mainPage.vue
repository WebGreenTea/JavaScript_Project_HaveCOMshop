<template>
  <!-- Nav bar -->
  <nav
    class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand float-left"
        >HaveCOM SHOP</router-link
      >
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <a @click="Logout" class="nav-link pr-3">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mt-5">
    <h1 :active="test">Hello {{ username }}</h1>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      test: false,
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  created() {
    let token = localStorage.getItem("token");

    if (!token) {
      //alert('don\'t have token')
      this.$router.push("/login");
    } else {
      let data = { token: token };
      let apiURL = "http://localhost:3000/user/verify-token";
      axios
        .post(apiURL, data)
        .then((res) => {
          this.username = res.data.username;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
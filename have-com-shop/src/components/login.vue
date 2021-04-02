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
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-5">
    <form @submit.prevent="handleLogin">
      <input
        type="text"
        placeholder="Username"
        v-model="login.username"
      /><br />
      <input
        type="password"
        placeholder="Password"
        v-model="login.password"
      /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      let apiURL = "http://localhost:3000/user/login";
      axios
        .post(apiURL, this.login)
        .then((res) => {
          console.log(res.data.data);
          localStorage.setItem("token", res.data.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    let token = localStorage.getItem("token");

    if (token) {
      //alert('don\'t have token')
      this.$router.push("/");
    }
  },
};
</script>
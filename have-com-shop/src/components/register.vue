
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
          <router-link to="/login" class="nav-link pr-3">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-5">
    <div>
      <div id="form">
        <form @submit.prevent="handleSubmit">
          <div>{{ errorstatus }}</div>
          <label>Email</label>
          <input
            type="email"
            v-model="user.email"
            placeholder="email"
            maxlength="40"
          />
          <label>Username</label>
          <input
            type="text"
            v-model="user.username"
            placeholder="username"
            maxlength="15"
            required
          />

          <label>ชื่อ</label>
          <input
            type="text"
            v-model="user.first_name"
            placeholder="ชื่อ"
            maxlength="35"
            required
          />

          <label>นามสกุล</label>
          <input
            type="text"
            v-model="user.last_name"
            placeholder="นามสกุล"
            maxlength="35"
            required
          />

          <label>เบอร์โทรศัพท์</label>
          <input
            type="text"
            v-model="user.phone"
            placeholder="เบอร์โทรศัพท์"
            maxlength="10"
            required
          />

          <fieldset id="fildpad">
            <legend>ที่อยู่(สำหรับการจัดส่งสินค้า)</legend>
            <input
              type="text"
              required
              placeholder="บ้านเลขที่"
              v-model="user.address.number"
            />
            <input type="text" placeholder="หมู่" v-model="user.address.moo" />
            <input type="text" placeholder="ถนน" v-model="user.address.road" />
            <input
              type="text"
              required
              placeholder="ตำบล"
              v-model="user.address.tumbon"
            />
            <input
              type="text"
              required
              placeholder="อำเภอ"
              v-model="user.address.aumper"
            />
            <input
              type="text"
              required
              placeholder="จังหวัด"
              v-model="user.address.city"
            />
            <input
              type="number"
              required
              placeholder="รหัสไปรษณีย์"
              v-model="user.address.code"
            />
          </fieldset>

          <!--<label>ที่อยู่(สำหรับการจัดส่งสินค้า)</label>
        <textarea
          placeholder="ที่อยู่(สำหรับการจัดส่งสินค้า)"
          v-model="user.address"
          cols="100"
          rows="4"
          maxlength="300"
          required
        ></textarea>
        -->
          <label>รหัสผ่าน</label>
          <input
            v-on:keyup="passchek"
            id="pwd1"
            type="password"
            v-model="user.password"
            placeholder="รหัสผ่าน"
            maxlength="35"
            required
          />

          <label>ยืนยันรหัสผ่าน</label>
          <input
            v-on:keyup="passchek"
            id="pwd2"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            maxlength="35"
            required
          />
          <div class="errpwd"></div>

          <button class="btn" type="submit" name="userReg">สมัคร</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        address: {
          number: "",
          road: "",
          moo: "",
          tumbon: "",
          aumper: "",
          city: "",
          code: "",
        },
        password: "",
      },
      errorstatus: "",
    };
  },
  methods: {
    passchek() {
      const pwd1 = document.querySelector("#pwd1");
      const pwd2 = document.querySelector("#pwd2");
      const errpass = document.querySelector(".errpwd");
      const btn = document.querySelector("button");
      if (!pwd2.value) {
        errpass.textContent = "";
        btn.setAttribute("disabled", "");
      } else if (pwd1.value != pwd2.value) {
        errpass.textContent = "*ยืนยันรหัสผ่านผิด";
        btn.setAttribute("disabled", "");
      } else {
        errpass.textContent = "";
        btn.removeAttribute("disabled", "");
      }
    },
    handleSubmit() {
      let apiURL = "http://localhost:3000/user/register";
      axios
        .post(apiURL, this.user)
        .then((res) => {
          if (res.data.status == "error") {
            this.errorstatus = "username or email already exist";
          } else {
            this.$router.push("/");
          }
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
<style>
@import "./css/registerCSS.css";
</style>
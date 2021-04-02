<template>
  <h1 :active="test">Hello {{username}}</h1>
  <button @click="Logout">Logout</button>
  
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return{
      username:'',
      test: false
    }
  },
  methods:{
    Logout(){
      localStorage.removeItem('token')
      this.$router.push('/login') 
    }
  },
  created(){
    let token = localStorage.getItem('token')
    
    if(!token){
      //alert('don\'t have token')
      this.$router.push('/login') 
    }else{
      let data = {token:token}
      let apiURL = "http://localhost:3000/user/verify-token"
      axios.post(apiURL,data).then((res) =>{
        this.username = res.data.username;
      })
      .catch((error) => {
          console.log(error);
      });
    }
  }
}
</script>
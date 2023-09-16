<template>
    <div class="nav">
      <div class="nav__start">
        <img alt="Vue logo" src="../assets/logo.png"/>
  
      </div>
  
      <div class="nav__end">
        <!-- Add login and sign-up buttons using Vuetify -->
        <button class="btn secondary ma-2 pink--text" @click="login">{{ $t("login") }}</button>
        <!-- <v-btn color="secondary" class="ma-2 pink--text" @click="signUp">{{ $t("sign_up") }}</v-btn> -->
        <button class="btn secondary ma-2 pink--text" @click="signUp">{{ $t("sign_up") }}</button>

        <p class="user-greeting">{{ $t("user_greeting") }}</p>
  
        <LocaleSwitcher />
      </div>
    </div>
  </template>
  

  <script>
  import LocaleSwitcher from "@/components/LocaleSwitcher"

  
  export default {
    components: { LocaleSwitcher },
    methods: {
        login() {

        },
        signUp() {
            
        }
    }
  }
  </script>
  
  <style scoped>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 1rem;
    color: #fff;
    background-color: #f1c9de;
    
  }
  
  .nav__start,
  .nav__end {
    display: flex;
    align-items: center;
  }
  
  .nav img {
    margin-right: 1rem;
    width: 90px; /* Adjust the width as needed */
    height: auto;
  }

  .logo-image {
  width: 90px; /* Adjust the width as needed */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */
}
  
  .nav a {
    margin-right: 1.5rem;
    font-weight: bold;
    color: #bb2525;
    text-decoration: none;
  }
  
  .btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.secondary {
  background-color: white;
  color: pink; /* Text color on the secondary background */
}

.ma-2 {
  margin: 0.5rem; /* Adjust the margin value as needed */
}

.pink--text {
  color: pink;
}
  .user-greeting {
    margin-right: 1rem;
  }
  </style>


  
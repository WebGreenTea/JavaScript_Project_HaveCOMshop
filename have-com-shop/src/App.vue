<template>
  <div>
    <!-- Nav bar -->  
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">HaveCOM SHOP</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link pr-3">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
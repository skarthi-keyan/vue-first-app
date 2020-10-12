<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link to="/registration">Registration</router-link> |
       <router-link to="/report">Report</router-link> |
        <router-link to="/converter">CodeConverter</router-link>
    </div>
    <router-view />
  </div>
</template>
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/gallery">Gallery</router-link>
  </div>
</template>

<style scoped>
#nav {
  /* box-shadow: 0 4px 15px -2px rgb(170, 170, 170); */
  background-color: white;
  border-bottom: rgb(154, 178, 197) 2px solid;
  position: sticky;
  top: 0;
}
</style>

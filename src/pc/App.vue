<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
  }

  div {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
</style>
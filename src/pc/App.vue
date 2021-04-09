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

  a {
    text-decoration: none;
  }

  .button {
    background-color: #e2e2e2;
    color: #000;
    width: 64px;
    border-radius: 3px;
    border: 1px solid;
    cursor: pointer;
  }
</style>
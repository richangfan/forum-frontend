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
  }

  .search-container {
    display: flex;
    flex-direction: row;
    padding-bottom: 15px;
  }

  .search-column {
    max-width: 300px;
    margin-right: 10px;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
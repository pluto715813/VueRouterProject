<template>
  <div id="app">
    <div class="container">
        <content-header></content-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  components:{
    "content-header":Header,
    // "app-header":Header,
  },
}

</script>

<style>

</style>

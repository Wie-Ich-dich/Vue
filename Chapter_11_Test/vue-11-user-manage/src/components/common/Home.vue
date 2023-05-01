<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view>内容框界面</router-view> 
      </transition>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';

export default {
  components: {
    vHead,
    vSidebar
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
}
.content {
  position: absolute;
  top: 70px;
  padding-left: 250px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
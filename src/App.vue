<template>
  <div id="app">
    <!-- 就不用每个页面都重新改了 -->
    <div class="contain">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
    </div>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar.vue";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>

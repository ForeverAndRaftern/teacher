<template>
  <div class="nav-bar">
    <div class="center"><slot name="box"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 60px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  background-color: var(--color-news);
  color: white;
}
.center {
  flex: 1;
}
/* .center input {
  text-align: left;
  border-radius: 40px;
  border: none;
  padding: 6px 80px;
} */
</style>

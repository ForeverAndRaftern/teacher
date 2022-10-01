<template>
  <div id="news">
    <nav-bar class="nav-home">
      <div class="box" slot="box">
        <input type="text" placeholder="搜索对话" />
      </div>
    </nav-bar>
    <StudentList />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import StudentList from "./childComps/StudentList.vue";
export default {
  name: "News",
  components: {
    NavBar,
    StudentList,
  },
};
</script>

<style scoped>
#news {
  height: 100vh;
  position: relative;
}
.nav-home {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}
.nav-home input {
  border-radius: 40px;
  margin-left: 8px;
  border: none;
  padding: 6px 80px;
}
</style>

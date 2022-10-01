<template>
  <div id="work">
    <nav-bar class="nav-home"
      ><div slot="box">
        <h3>欢迎!<br />{{ name }}老师,您可以:</h3>
      </div></nav-bar
    >
    <choice-list />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import ChoiceList from "./childComps/ChoiceList.vue";
export default {
  name: "Work",
  data() {
    return {
      name: "李四",
    };
  },
  components: {
    NavBar,
    ChoiceList,
  },
};
</script>

<style scoped>
.nav-home {
  z-index: 9;
  text-align: left;
  padding-left: 8px;
}
</style>

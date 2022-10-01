<template>
  <div>
    <nav-bar class="me">
      <div class="context" slot="box">
        <img src="@/assets/img/me/headPortrait.jpg" alt="" />
        <h2>李四老师</h2>
      </div>
    </nav-bar>
    <infor-mation />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import InforMation from "./childComps/InforMation.vue";
export default {
  name: "Me",
  data() {
    return {
      name: "李四",
    };
  },
  components: {
    NavBar,
    InforMation,
  },
};
</script>

<style scoped>
.me {
  display: flex;
  flex-direction: column;
}
.me .context {
  display: flex;
  align-items: center;
}
.me .context img {
  width: 50px;
  height: 50px;
  margin: 2px 8px;
  border-radius: 50%;
}
</style>

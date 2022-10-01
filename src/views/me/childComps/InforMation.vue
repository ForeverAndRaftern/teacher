<template>
  <div class="inforMation">
    <div class="infor-mation-item" v-for="item in Informationlist">
      <img :src="require('@/assets/img/me/' + item.img)" alt="" />
      <div class="item-info">
        <h3>{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InforMation",
  data() {
    return {
      Informationlist: [
        { img: "logo.png", title: "我的资料" },
        { img: "logo.png", title: "报名情况" },
        { img: "logo.png", title: "我的组织" },
        { img: "logo.png", title: "关于" },
      ],
    };
  },
};
</script>

<style scoped>
.inforMation {
  display: flex;
  flex-flow: row wrap;
}
.infor-mation-item {
  flex-basis: 33%;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.infor-mation-item img {
  width: 80px;
  height: 60px;
}
.infor-mation-item:nth-child(3n + 2) {
  border-left: 2px solid black;
  border-right: 2px solid black;
}
</style>

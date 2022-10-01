<template>
  <div class="ChoiceList">
    <div class="ChoiceList-item" v-for="item in choicelist">
      <img :src="require('@/assets/img/work/' + item.img)" />
      <button>{{ item.title }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChoiceList",
  data() {
    return {
      choicelist: [
        { img: "post.svg", title: "发布工作" },
        {
          img: "volunteer.png",
          title: "查看志愿者名录",
        },
        { img: "punch.png", title: "查看打卡情况" },
      ],
    };
  },
  methods: {
    myfun(str) {
      console.log("111", str);
      return require(str);
    },
  },
};
</script>

<style scoped>
.ChoiceList {
  display: flex;
  flex-direction: column;
}
.ChoiceList-item {
  flex: 1;
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 8px solid #eee;
}
.ChoiceList-item img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
.ChoiceList-item button {
  background-color: var(--color-news);
  color: white;
  padding: 4px 10px;
  border: none;
  border-radius: 5px;
  height: 40px;
}
</style>

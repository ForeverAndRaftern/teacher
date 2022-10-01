<template>
  <tab-bar>
    <tab-bar-item path="/work">
      <img src="~assets/img/tabbar/work.svg" alt="img" slot="item-icon" />
      <img
        src="~assets/img/tabbar//work_active.svg"
        alt="img"
        slot="item-icon-active"
      />
      <div slot="item-text">工作</div>
    </tab-bar-item>

    <tab-bar-item path="/news" active-color="deeppink">
      <img src="~assets/img/tabbar/news.svg" alt="img" slot="item-icon" />
      <img
        src="~assets/img/tabbar/news_active.svg"
        alt="img"
        slot="item-icon-active"
      />
      <div slot="item-text">消息</div>
    </tab-bar-item>

    <tab-bar-item path="/me">
      <img src="~assets/img/tabbar/me.svg" alt="img" slot="item-icon" />
      <img
        src="~/assets/img/tabbar/me_active.svg"
        alt="img"
        slot="item-icon-active"
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped></style>

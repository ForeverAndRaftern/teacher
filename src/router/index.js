import Vue from "vue";
import VueRouter from "vue-router";
const Work = () => import("@/views/work/Work.vue");
const News = () => import("@/views/news/News.vue");
const Me = () => import("@/views/me/Me.vue");
//1.安装插件
Vue.use(VueRouter);
//2.路由注册
const routes = [
  {
    path: "",
    component: Work,
  },
  {
    path: "/work",
    component: Work,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/me",
    component: Me,
  },
];
//3.路由的实例
const router = new VueRouter({
  routes,
  mode: "history",
});

//暴露路由
export default router;

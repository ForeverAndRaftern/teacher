<template>
  <div class="Place">
    <div class="Place-item">
      <div class="header">
        <h3>图书管理员</h3>
        <h3 style="color: #00f260">2022-07-10</h3>
      </div>
      <div class="main">
        <div><span>工作时长 </span><span>4小时/天</span></div>
        <div><span>工作地点 </span><span>第一图书馆</span></div>

        <div class="container">
          <div><span>联系人</span><span>第一图书馆办公室</span></div>
          <button>点击了解</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Place",
  data() {
    return {
      list: [
        {
          title: "图书管理员",
          dateTime: "2022-08-12",
          times: "4小时/天",
          workPlace: "第一图书馆",
          contacts: "第一图书馆办公室",
        },
        {
          title: "图书管理员",
          dateTime: "2022-07-12",
          times: "4小时/天",
          workPlace: "第一图书馆",
          contacts: "第一图书馆办公室",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Place {
  display: flex;
  width: 100%;
  border-bottom: 5px solid #eee;
}
span {
  margin: 2px 5px;
}
.Place-item {
  flex: 1;
}
.Place-item .header {
  display: flex;
  margin: 10px;
  justify-content: space-between;
}
.Place-item .main {
  margin: 5px;
}
.Place-item .main span {
  color: rgb(158, 158, 158);
}
.Place-item .main .container {
  display: flex;
  justify-content: space-between;
}
.Place-item .main .container button {
  background-color: var(--color-news);
  color: white;
  padding: 4px 14px;
  border: none;
}
</style>

<template>
  <div class="student">
    <div class="student-item" v-for="item in studentlist">
      <a href="#" class="context">
        <div><img :src="require('@/assets/img/work/' + item.img)" /></div>
        <div>
          <h3>{{ item.name }}</h3>
          <div>
            <span>{{ item.title }}</span
            ><span>{{ item.datatime }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      studentlist: [
        {
          img: "headPortrait.jpg",
          name: "张三",
          title: "同学你好，请问什么时候可以到岗",
          datatime: "18:00",
        },
        {
          img: "headPortrait.jpg",
          name: "李四",
          title: "同学你好，请问什么时候可以到岗",
          datatime: "17:00",
        },
      ],
    };
  },
};
</script>

<style scoped>
.student {
  display: flex;
  flex-direction: column;
}
.student-item {
  border-bottom: 2px solid #eee;
}
.student-item .context {
  display: flex;
  align-items: center;
}
.student-item .context span {
  margin: 6px 10px 6px 0;
}
.student-item img {
  width: 60px;
  height: 60px;
  padding: 8px;
  border-radius: 50%;
}
</style>

<template>
  <div>
    <img src="../../assert/img/1600158956870.jpg" alt class="homeImg" />
    <ul>
      <li v-for="(item, index) in path" :key="index">
        <router-link :to="item.path">
            <img :src="item.icon" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
const MeauImg = require('assert/img/1600158854838.jpg')
export default {
  data() {
    return {
      path: [
        {
          icon: MeauImg,
          text: "故障处置",
          path: "/handler",
        },
        {
          icon: MeauImg,
          text: "通知管理",
          path: "/infoMng",
        },
        {
          icon: MeauImg,
          text: "故障统计",
          path: "/statistics",
        },
        {
          icon: MeauImg,
          text: "处置日志",
          path: "/log",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.homeImg {
  height: 300px;
  width: 100%;
}
ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    li {
        flex: 1;
        width: 40%;
    }
}
</style>
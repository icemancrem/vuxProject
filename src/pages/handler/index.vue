<template>
  <div>
    <p>  请选择查询时间 </p>
    <Group>
      <Datetime title="请选择查询时间" v-model="time" value-text-align="right" />
    </Group>
    <div>
      <ul class="list">
        <li v-for="n in 5" :key="n">
          <p>
            <i>张江（2）</i>
            <button @click="toPath()">故障判定</button>
          </p>
          <ul class="content">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Datetime, Group, dateFormat } from 'vux'
export default {
  components: {
    Datetime,
    Group
  },
  data() {
    return {
      time: dateFormat(new Date(), 'YYYY-MM-DD'),
    }
  },
  methods: {
    toPath () {
      this.$router.push('/handlerJug')
    }
  },
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
  .list {
    // width: 100%;
    padding: 15px;
    list-style: none;
    li {
    list-style: none;
      margin-top: 20px;
      p {
        height: 50px;
        i {
          border: 1px #ccc solid;
          border-bottom: none;
          line-height: 50px;
          height: 50px;
          font-size: 18px;
          display: inline-block;
        }
        button {
          width: 100px;
          height: 30px;
          line-height: 30px;
          float: right;
        }
      }
      .content {
        border: 1px #ccc solid;
      }
    }
  }
</style>
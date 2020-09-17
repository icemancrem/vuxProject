import React, {Component} from 'react'
import {List, Flex, Radio} from 'antd-mobile'
import './index.less'
const Item = List.Item
const RadioItem = Radio.RadioItem;

class Jug extends Component {
    state = {
        value1: 3,
    }
    onchange = (item) => {
        console.log(item);
        this.setState({
            value1: item
        })
    }
    render () {
        const data = [
            {value: 0, label: "故障"},
            {value: 1, label: "非故障"}
        ]
        const {value1} = this.state
        return <main>
            <List renderHeader={ () => <div className="header"><i className="title">松江</i></div>}>
                <Item extra={'name'}>故障设备</Item>
                <Item extra={'name'}>故障级别</Item>
                <Item extra={'name'}>故障类别</Item>
            </List>
            {/* <Flex style={{ padding: '15px' }}> */}
                {data.map( (item,index) => {
                    return <p>{item.label}<input type='radio' value={item.value} checked={value1 === item.value} onChange={ () => this.onchange(item.value)} ></input>
                        {/* <RadioItem defaultChecked={true} key={item.value} checked={ value1 === item.value} onchange={ () => this.onchange(item.value)}>{item.label}</RadioItem> */}
                        </p>
                })}
            {/* </Flex> */}
        </main>
    }
}
export default Jug



<template>
  <div class="list">
    <ul>
      <p>
        <i>张江（2）</i>
      </p>
      <li v-for="n in 5" :key="n">
        <ul class="content">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <checklist
            :options="commonList"
            v-model="radioValue"
            :max="1"
            @on-change="change"
          ></checklist>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { Checklist } from "vux";

export default {
  components: {
    Checklist,
  },
  data() {
    return {
      radioValue: "",
      commonList: [
          {
          key: 1, value: 'asdasda'
      },
             {
          key: 2, value: 'sdasdsd'
      },
      ],
    };
  },
  methods: {
      change () {
        
      }
  },
};
</script>

<style lang="less">
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
.list {
  // width: 100%;
  padding: 15px;
  list-style: none;
  ul {
    li {
      list-style: none;
      margin-top: 10px;
      //   &:nth-child(1) {
      //     margin-top: 0;
      //   }
      .content {
        border: 1px #ccc solid;
      }
    }
  }
}

.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
</style>
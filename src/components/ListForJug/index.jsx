import React, { Component } from 'react'
import './index.less'
import {  List } from 'antd-mobile'
const Item = List.Item
// function ListHeader(props) {
//     return 
// }
class ListHandler extends Component {
    state = {
        data: {},
        arrayList: [
            {
                title: "张江1",
                count: Math.floor(Math.random() * 20),
                id: 12122,
            },
            {
                title: "张江2",
                count: Math.floor(Math.random() * 20),
                id: 12123,

            },
            {
                title: "张江3",
                count: Math.floor(Math.random() * 20),
                id: 12124,

            },
            {
                title: "张江4",
                count: Math.floor(Math.random() * 20),
                id: 12125,

            },
            {
                title: "张江5",
                count: Math.floor(Math.random() * 20),
                id: 12126,

            },
        ],

    }
    // constructor (props) {
    //     super(props)
    //     this.state = {

    //     }
    // }
    btnClick = (item) => {
        console.log(item);
    }
    render() {
        return <main className="Content">
                {this.state.arrayList.map((item, index) =>
                    <List key={index} renderHeader={() => <div className="header"><i className="title">{item.title}（{item.count}）</i></div>}>
                        <Item extra={'extra content'}>基站地址：</Item>
                        <Item extra={'extra content'}>故障时间：</Item>
                        <Item extra={'extra content'}>基站类别：</Item>
                        <Item extra={'extra content'}>建设时间：</Item>
                        <Item extra={'extra content'}>责任人：</Item>
                        <Item extra={'extra content'}>联系方式：</Item>
                        <Item extra={'extra content'}>处置状态：</Item>
                    </List>
                )}
            </main>
    }
}
export default ListHandler
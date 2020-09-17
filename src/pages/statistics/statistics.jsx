import React, {Component} from 'react'
import { DatePicker, List, Flex, Accordion} from 'antd-mobile'
import { NavLink } from 'react-router-dom';
// const nowTimeStamp = Date.now();
// const now = new Date(nowTimeStamp);
const CustomChildren = ({ extra, onClick, children }) => (
    <div
      onClick={onClick}
      style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px'}}
    >
      {children}
      <span style={{ float: 'right', color: '#888' }}>{extra}</span>
    </div>
  );
export default class Statistics extends Component {
    state= {
        startVal: null,
        endVal: null
    }
    onChange1 = (startVal) => {
        console.log(startVal);
        this.setState({startVal})
    }
    onChange2 = (endVal) => {
        console.log(endVal);
        this.setState({endVal})
    }
    onChange3 = (key) => {
        console.log(key);
    }
    onValueChange = (...args) => {
        console.log(args);
    }
    render() {
        return <div>
            <List><List.Item>查询时间</List.Item></List>
            <Flex>
                <Flex.Item>
                    <DatePicker
                        mode="date"
                        value={this.state.startVal}
                        onChange={this.onChange1}
                        onValueChange={this.onValueChange}
                        extra={"请选择开始时间"}
                    >
                        <CustomChildren> 开始时间 </CustomChildren>
                    </DatePicker>
                </Flex.Item>
                <Flex.Item>
                    <DatePicker
                        mode="date"
                        value={this.state.endVal}
                        onChange={this.onChange2}
                        onValueChange={this.onValueChange}
                        extra={"请选择结束时间"}
                    >
                        <CustomChildren> 结束时间 </CustomChildren>
                    </DatePicker>
                </Flex.Item>
            </Flex>
            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange3}>
                <Accordion.Panel header="张江（10）">
                    <List className="my-list">
                        <List.Item><NavLink to="/statisticsDetail?id=11111">信道机1</NavLink></List.Item>
                        <List.Item>信道机2</List.Item>
                        <List.Item>信道机3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
            </Accordion>
            
        </div>
    }
}

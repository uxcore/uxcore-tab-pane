/**
 * TabPane Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Tabs = require('uxcore-tabs');

let TabPane = require('../src');

function callback(key) {
  console.log(key);
}

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Tabs defaultActiveKey="2" onChange={callback}>
              <TabPane tab="tab 1" key="1">选项卡一</TabPane>
              <TabPane tab="tab 2" key="2">选项卡二</TabPane>
              <TabPane tab="tab 3" key="3">选项卡三</TabPane>
            </Tabs>
        );
    }
};

module.exports = Demo;

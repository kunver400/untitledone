import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderWrapper extends Component {
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }} breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
                <Menu theme='dark'
                    mode="inline"
                    //defaultSelectedKeys={['1']}
                    //defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="database" />All Books</span>}>
                        <Menu.Item key="1">Best sellers</Menu.Item>
                        <Menu.Item key="2">Fresh arrivals</Menu.Item>
                        <Menu.Item key="3">Magazines</Menu.Item>
                        <Menu.Item key="4">Indexed collection</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="barcode" />My Books</span>}>
                        <Menu.Item key="5">Active subscriptions</Menu.Item>
                        <Menu.Item key="6">Issued Books</Menu.Item>
                        <Menu.Item key="7">Whishlist</Menu.Item>
                        <Menu.Item key="8">Recommendations</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="team" />Social</span>}>
                        <Menu.Item key="9">Chatrooms</Menu.Item>
                        <Menu.Item key="10">Friends</Menu.Item>
                        <Menu.Item key="11">Recommend a Book</Menu.Item>
                        <Menu.Item key="12">Lets Party!</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default SiderWrapper;
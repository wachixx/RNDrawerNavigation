import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body,Button, Title, Content, Left, Icon, Right } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class CustomHeader extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left><Button transparent><Icon name="menu" onPress={() => this.props.drawerOpen()} /></Button></Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
});

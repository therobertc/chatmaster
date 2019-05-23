import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Header, Left, Right, Icon } from 'native-base'

class SettingsScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="settings" style={{fontSize:24, color: tintColor}} />
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <Header>
            <Left>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
            </Left>
            <Right>
            <Icon name="search" onPress={() => this.props.navigation.openDrawer()}/>
            </Right>
        </Header>
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center' }}>
        <Text> Chartbot.io/settings </Text>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

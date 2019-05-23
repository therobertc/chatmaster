import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import {Header, Left, Right, Icon, Body } from 'native-base'

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="list-box" style={{fontSize:24, color: tintColor}} />
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: '#212121'}}>
        <Left>
            <Icon style={{color: 'white'}} name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
            <Body>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', width: 150}}>
                ORDER BOOK
            </Text>
            </Body>
            <Right>
            <Icon style={{color: 'white'}} name="search" onPress={() => this.props.navigation.openDrawer()}/>
            </Right>
        </Header>
        <View style={{ flex:1, height: 30, backgroundColor: '#212121'}}>
        <Text style= {{ color: 'green', fontSize: 20, fontWeight: 'bold', marginBottom: 30, marginTop: 30, textAlign: 'center'}}>
           coming soon
        </Text>
        <ScrollView style={{ flex: 3}}>
        <Image source={require('../assets/orderbook.jpg')} style= {{ height: 800, width: "100%" }}/>
        
        </ScrollView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
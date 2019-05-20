import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import {Header, Left, Right, Body, Icon, Button } from 'native-base'

import { createSwitchNavigator,  } from 'react-navigation'

//import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')

class Groups extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="ios-options" style={{fontSize:24, color: tintColor}} />
        )
    }
  render() {

    const { navigation:navigate } = this.props;
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: '#0d1a26'}}>
            <Left>
                <Icon style={{color: 'white'}} name="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
            </Left>

            <Body>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Dashboard
            </Text>
            </Body>

            <Right>
                <Icon style={{color: 'white'}} name="ios-create" onPress={() => this.props.navigation.navigate('Create Group')}/>
            </Right>

            
        </Header>
        <ScrollView style={{ backgroundColor: '#0d1a26'}}>
        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>
                  Business Group
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10, color: 'white' }}>
                  A group to chat about business

              </Text>
              <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderWidth: 1, borderColor: 'grey', marginBottom: 0 }}
                      source={require('../assets/chatcloud.png')}
                  />
                  <Button 
                        full
                        //rounded
                        //style={{ borderRadius: 10 }}
                        primary
                        onPress={()=> this.props.navigation.navigate ('GroupPage')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Join Group </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>
                  How to Make Money
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10, color: 'white' }}>
                  A group to chat about making money
              </Text>
              <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderWidth: 1, borderColor: '#dddddd' }}
                      source={require('../assets/chatcloud.png')}
                  />
                  <Button 
                        full
                        //rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Subscribe')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Subscribe </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>
                  Friends Group
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10, color: 'white' }}>
                  A group to chat with friends

              </Text>
              <View style={{ width: width - 40 , height: 300, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderWidth: 1, borderColor: '#dddddd' }}
                      source={require('../assets/chatcloud.png')}
                  />
                  <Button 
                        full
                        //rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('GroupPage')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Join Group </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>
                  Business & Friends
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10, color: 'white' }}>
                  A group to chat about business with friends
              </Text>
              <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderWidth: 1, borderColor: '#dddddd' }}
                      source={require('../assets/chatcloud.png')}
                  />
                  <Button 
                        full
                        //rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('GroupPage')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Subscribe </Text> 
                </Button>
              </View>
          </View>

    




          <View style={{height: 100}}></View>
      </ScrollView>
 </View>
    );
  }
}

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
      text: {
          marginHorizontal: 8,
          marginVertical: 10
      },
      bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },
      searchbar: {
        marginTop: 50
      },
})

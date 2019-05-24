import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import {Header, Left, Right, Body, Icon, Button } from 'native-base'

import { createSwitchNavigator,  } from 'react-navigation'

import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')


class Screener extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="options" style={{fontSize:24, color: tintColor}} />
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <Header>
            <Left>
                <Icon name="chatbubbles" onPress={() => this.props.navigation.openDrawer()}/>
            </Left>

            <Body>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0065E7'}}>
                CHARTBOT
            </Text>
            </Body>

            <Right>
            <Icon name="search" onPress={()=> this.props.navigation.navigate('Search')}/>
            </Right>

            
        </Header>
        <ScrollView>
        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Today's Most Active
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chart.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Most Active')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> View Stocks </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Today's Top Gainers
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chart.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Top Gainers')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> View Stocks </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Oversold Stocks
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chart.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Oversold')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> View Stocks </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  High Volume 
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Subscribe')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Subscribe </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Upcoming IPO's
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Subscribe')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Coming Soon </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  ETF's
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Subscribe')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Coming Soon </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Favorites List 
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Subscribe')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Coming Soon </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Crypto
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Subscribe')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Coming Soon </Text> 
                </Button>
              </View>
          </View>


          <View style={{height: 100}}></View>
      </ScrollView>
 </View>
    );
  }
}

export default Screener;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

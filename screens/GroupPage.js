import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import {Header, Left, Right, Body, Icon, Button } from 'native-base'

import { createSwitchNavigator,  } from 'react-navigation'

//import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')


class GroupPage extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="people" style={{fontSize:24, color: tintColor}} />
        )
    }
  render() {
    const { navigation:navigate } = this.props;
    return (
      <View style={styles.container}>
        <Header>
            <Left>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
            </Left>

            <Body>
            <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: '#0065E7'}}>
            Business
            </Text>
            </Body>

            <Right>
            <Icon name="search" 
            onPress={()=> this.props.navigation.navigate('Search')}
            />
            </Right>

            
        </Header>
        <ScrollView>
        <View style={{ marginTop: 300, paddingHorizontal: 20 }}>
    
              <View style={{ width: width - 40, height: 200 }}>
              <Text style={{ fontSize: 14, fontWeight: '500'}}> @rob </Text>
              <View style={{ width: width - 40, height: 50, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#147efb' }}>
              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold', color: 'white'}}> Hey this is a message </Text>
              </View>

              

              <Text style={{ fontSize: 14, fontWeight: '500'}}> @nikhil </Text>
  
              <View style={{ width: width - 40, height: 100, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#147efb' }}>
              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold', color: 'white'}}> Hey this is a message, Hey this is a message ,
              Hey this is a messageHey this is a message, Hey this is a message, Hey this is a message, Hey this is a message</Text>
                    
            
              </View>
                  <View>
                  <Button 
                        full
                        //rounded
                        primary
                        style={{ borderRadius: 10, marginTop: 50 }}
                        onPress={() => this.props.navigation.navigate('CreatePost')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Create Post </Text> 
                </Button>

                </View>
              </View>
          </View>

          <View style={{height: 100}}></View>
      </ScrollView>
 </View>
    );
  }
}

export default GroupPage;

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
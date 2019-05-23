import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import {Header, Left, Right, Body, Icon, Button } from 'native-base'

import { createSwitchNavigator,  } from 'react-navigation'

//import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')


class Subscribe extends Component {

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
            <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: '#0065E7' }}>
            Subscribe
            </Text>
            </Body>

            <Right>
            <Icon name="search" 
            onPress={()=> this.props.navigation.navigate('Search')}
            />
            </Right>

            
        </Header>
        <ScrollView>
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>

        <View style={{ flexDirection: 'row', width: width - 40, height: 60 }}>
              <Text style={{ fontSize: 16, fontWeight: '500'}}> Payment Amount: </Text>
              <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: '500', fontWeight: 'bold'}}> $5 Weekly Subscription </Text>
              </View>

    
              <View style={{ width: width - 40, height: 200 }}>
             <Text style={{ fontSize: 16, fontWeight: '500'}}> Name on Card </Text>
              <View style={{ width: width - 40, height: 50, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#F0F0F0' }}>
              <TextInput
                  style={{height: 50, borderRadius: 10, borderColor: 'grey', borderWidth: 1, fontSize: 20}}
                    />
                     </View>
                <Text style={{ fontSize: 16, fontWeight: '500'}}> Card Number </Text>
                <View style={{ width: width - 40, height: 50, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#F0F0F0' }}>
              <TextInput
                  style={{height: 50, borderRadius: 10, borderColor: 'grey', borderWidth: 1, fontSize: 20}}
                    />
                </View>
                <View style={{ flexDirection:'row', width: width - 40, height: 20, marginBottom: 10, marginTop: 10, borderRadius: 10 }}>
              <Text style={{ width: 200, fontSize: 16, fontWeight: '500'}}> Expiry Date </Text>
              <Text style={{ width: 130, fontSize: 16, fontWeight: '500'}}> Security Code </Text>

              </View>

              <View style={{ flexDirection:'row', width: width - 40, height: 50, marginBottom: 20, marginTop: 10, borderRadius: 10 }}>
              <TextInput style={{width: 200, backgroundColor: '#F0F0F0', height: 50, borderRadius: 10, borderColor: 'grey', borderWidth: 1, fontSize: 20}}/>
              <TextInput style={{width: 120, backgroundColor: '#F0F0F0', height: 50, borderRadius: 10, marginLeft: 20, borderColor: 'grey', borderWidth: 1, fontSize: 20}}/>
              </View>
              <Text style={{ fontSize: 16, fontWeight: '500'}}> Zip/Postal Code </Text>
                <View style={{ width: width - 40, height: 50, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#F0F0F0' }}>
              <TextInput
                  style={{height: 50, borderRadius: 10, borderColor: 'grey', borderWidth: 1, fontSize: 20}}
                    />
                </View>
                  <View>
                  <Button 
                        full
                        //rounded
                        iconLeft
                        primary
                        style={{ borderRadius: 10, marginTop: 50 }}
                        onPress={() => this.props.navigation.navigate('Confirmation')}
                        >
                        <Icon name='lock' large style = {{ paddingLeft: 80, paddingRight: 20}} />
                     <Text style = {{ flex: 2, fontSize: 18, color: 'white', fontWeight: 'bold' }}> Subscribe </Text> 
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

export default Subscribe;

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
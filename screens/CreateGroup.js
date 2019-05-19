import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import {Header, Left, Right, Body, Icon, Button } from 'native-base'

import { createSwitchNavigator,  } from 'react-navigation'

//import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')


class CreateGroup extends Component {

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
            Create Group
            </Text>
            </Body>

            <Right>
            <Icon name="search" 
            onPress={()=> this.props.navigation.navigate('Search')}
            />
            </Right>

            
        </Header>
        <ScrollView>
        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
    
              <View style={{ width: width - 40, height: 200 }}>
              <Text style={{ fontSize: 14, fontWeight: '500'}}> Enter a Group Name </Text>
              <View style={{ width: width - 40, height: 50, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#F0F0F0' }}>
              <TextInput
                  style={{height: 50, borderRadius: 10, borderColor: 'grey', borderWidth: 1}}
                 // onChangeText={(text) => this.setState({text})}
                 // value={this.state.text}
                    />
              </View>

              <Text style={{ fontSize: 14, fontWeight: '500'}}> Enter a Group Description </Text>
  
              <View style={{ width: width - 40, height: 100, marginBottom: 20, marginTop: 20, borderRadius: 10,  backgroundColor: '#F0F0F0' }}>
              <TextInput
                  style={{height: 100, borderRadius: 10, borderColor: 'grey', borderWidth: 1}}
                 // onChangeText={(text) => this.setState({text})}
                 // value={this.state.text}
                    />
              </View>
                  <View>
                  <Button 
                        full
                        //rounded
                        primary
                        style={{ borderRadius: 10, marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate('GroupPage')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Create Group </Text> 
                </Button>
                <Button 
                        full
                        //rounded
                        success
                        style={{ borderRadius: 10, marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate('Groups')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold' }}> Cancel </Text> 
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

export default CreateGroup;

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
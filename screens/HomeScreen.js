import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {Header, Left, Right, Icon, Button } from 'native-base'

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{fontSize:24, color: tintColor}} />
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
            <Icon name="search" onPress={()=> this.props.navigation.navigate('Search')}/>
            </Right>
        </Header>
        <View style={{ flex:1, alignItems:'center', marginTop: 160 }}>
        <Image source={require('../assets/ChartBotWhiteLogo.png')} style= {{height: 120, width: 120, 
      borderRadius: 60 }}/>
            <Text style={{ fontSize: 30, fontWeight:'bold'}}> CHART BOT</Text>
        </View>
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'top', marginTop: 50}}>
          <Text style = {{ fontWeight: '500', fontSize: 20}}>
            Automate your trading research.
          </Text>
          <Button 
              full
              rounded
              primary
              style = {{ marginLeft: 50, marginRight: 50, marginTop: 30}}
              onPress={()=> this.props.navigation.navigate ('Screener')}
              >
              <Text style = {{ color: 'white', fontWeight: 'bold', justifyContent: 'center' }}> Get Started </Text> 
            </Button>
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

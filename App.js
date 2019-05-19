import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator, AppNavigator } from 'react-navigation';


import Groups from './screens/Groups';
import CreateGroup from './screens/CreateGroup';
import GroupPage from './screens/GroupPage';
import CreatePost from './screens/CreatePost';
//import Post from './screens/Post';
//import DayTrading from './screens/DayTrading';
//import PostList from './screens/PostList';
//import Oversold from './screens/Oversold';
//import { TouchableOpacity } from 'react-native-gesture-handler';




const {width} = Dimensions.get('window')

class App extends Component {
  render() {
    const { navigation:navigate } = this.props;
    return (
      <AppDrawerNavigator/>
    );
  }
}

{/* Drawer Image View */}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#0d1a26'}}>
    <View style ={{ height: 150, 
        justifyContent: 'center', flexDirection: 'row', }}>
      <Image source={require('./assets/chatcloudicon.png')} style= {{ paddingLeft: 20, height: 120, width: 120, 
      borderRadius: 60 }}/>
      <TouchableOpacity>
      <Text
  style={{paddingTop: 50, justifyContent: 'center', fontSize: 20, fontWeight: 'bold', paddingBottom: 5, paddingRight: 50, color:'white'}}>
        @CHATCLOUD
      </Text>
      </TouchableOpacity>
    </View>
    <View style ={{ flexDirection: 'row', height: 30,
         justifyContent: 'center' }}>
      <Text style = {{ fontSize: 20, fontWeight: 'bold', paddingBottom: 5, paddingRight: 110, color: 'white' }}>
        New Messages
      </Text>

    {/*<Text style = {{ color: 'green', fontSize: 20, fontWeight: 'bold', paddingBottom: 5 }}> +20% </Text>*/}
     {/*} <Text style = {{ fontSize: 20, fontWeight: '500' }}>
        Cash             $comingsoon
      </Text>
      <Text style = {{ fontSize: 20, fontWeight: '500'}}>
        Stocks         $comingsoon
      </Text>
      <Text style = {{ fontSize: 20, fontWeight: '500'}}>
        Crypto         $comingsoon
      </Text>*/}
      </View>
    <ScrollView>
        {/*<DrawerItems {...props} />*/}
        <View style ={{ height: 100}}>
        <Text style = {{ paddingTop: 30, paddingLeft: 20, fontSize: 20, fontWeight: 'bold', paddingBottom: 20, paddingRight: 50, color: 'grey' }}>
        Group Messages
      </Text>
      <TouchableOpacity> 
          <Text style={{fontSize: 20, fontWeight:'bold', color: 'white', paddingLeft: 20, paddingBottom: 20}}>
             #Business
          </Text>
       </TouchableOpacity>
       </View>
       <View style ={{ height: 50}}>
        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight:'bold', color: 'white', paddingLeft: 20, paddingBottom: 20}}>
             #Friends
             </Text>
        </TouchableOpacity>
      </View>
      {/*<View style ={{ height: 100 }}>*/}
      <Text style = {{ paddingTop: 30, paddingLeft: 20, fontSize: 20, fontWeight: 'bold', paddingBottom: 20, paddingRight: 50, color: 'grey' }}>
        Private Messages
      </Text>
      <TouchableOpacity> 
          <Text style={{fontSize: 20, fontWeight:'bold', color: 'white', paddingLeft: 20, paddingBottom: 10}}>
             @Nikhil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={{fontSize: 20, fontWeight:'bold', color: 'white', paddingLeft: 20, paddingBottom: 20}}>
             @Rob
          </Text>
        </TouchableOpacity>
      {/*</View>*/}

    </ScrollView>
  </SafeAreaView>
)

export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Groups: { screen: Groups },
  CreateGroup: {screen: CreateGroup},
  GroupPage:{screen: GroupPage},
  CreatePost: {screen: CreatePost}
  //Post: {screen: Post},
  //DayTrading: { screen: DayTrading },
});


{/* Drawer Menu Items */}
const AppDrawerNavigator = createDrawerNavigator ({
  Groups: Groups,
  'Create Group': CreateGroup,
  GroupPage: GroupPage,
  CreatePost: CreatePost
  //"Day Trading": DayTrading,
  //Post: Post,
  //"Post List": PostList,
  //Oversold: Oversold,
}, {

contentComponent: CustomDrawerComponent,
drawerWidth: 300,
contentOptions: {
  activeTintColor: 'lightskyblue',
  inactiveTintColor: 'white'
  },
  labelStyle: {
    color: 'white',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

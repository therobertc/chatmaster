import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator } from 'react-navigation';


import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Screener from './screens/Screener';
import Watchlist from './screens/Watchlist';
import TopGainers from './screens/TopGainers';
import OrderBook from './screens/OrderBook';
import Search from './screens/Search';
import Oversold from './screens/Oversold';
import Subscribe from './screens/Subscribe';
import Confirmation from './screens/Confirmation';


const {width} = Dimensions.get('window')

class App extends Component {
  render() {
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
      <Image source={require('./assets/ChartBotlogo.png')} style= {{ paddingLeft: 20, height: 120, width: 120, 
      borderRadius: 60 }}/>
      <TouchableOpacity>
      <Text
  style={{paddingTop: 50, justifyContent: 'center', fontSize: 20, fontWeight: 'bold', paddingBottom: 5, paddingRight: 50, color:'white'}}>
        @CHARTBOT
      </Text>
      </TouchableOpacity>
    </View>
    <View style ={{ flexDirection: 'row', height: 30,
         justifyContent: 'center' }}>
      <Text style = {{ fontSize: 20, fontWeight: 'bold', paddingBottom: 5, paddingRight: 160, color: 'white' }}>
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
             @chartbot
          </Text>
        </TouchableOpacity>
      {/*</View>*/}

    </ScrollView>
  </SafeAreaView>
)

export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Screener },
  OrderBook: { screen: OrderBook },
  Watchlist: { screen: Watchlist },
  Oversold: {screen: Oversold },
  TopGainers: { screen: TopGainers },
  Settings:{ screen: SettingsScreen },
  Screener:{ screen: Screener },
  Search:{ screen: Search },
  Subscribe:{screen: Subscribe },
  Confirmation: {screen: Confirmation},
});


{/* Drawer Menu Items */}
const AppDrawerNavigator = createDrawerNavigator ({
  Home: Screener,
  Search: Search,
  Screener: Screener,
  "Most Active": Watchlist,
  //"Order Book" : OrderBook,
  Oversold: {screen: Oversold },
  "Top Gainers" : TopGainers,
  Settings: SettingsScreen,
  Subscribe: Subscribe,
  Confirmation: Confirmation,
}, {

contentComponent: CustomDrawerComponent,
drawerWidth: 350,
contentOptions: {
  activeTintColor: '#2A86BA'
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

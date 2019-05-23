import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
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
  <SafeAreaView style={{ flex: 1}}>
    <View style ={{ height: 150, backgroundColor: 'white', 
        alignItems:'center', justifyContent: 'center' }}>
      <Image source={require('./assets/ChartBotWhiteLogo.png')} style= {{height: 120, width: 120, 
      borderRadius: 60 }}/>
    </View>
    {/*<View style ={{ height: 150, backgroundColor: 'white',
        alignItems:'left', justifyContent: 'center', marginLeft: 20 }}>
      <Text style = {{ fontSize: 20, fontWeight: 'bold', paddingBottom: 15 }}>
        Account Value          
      </Text>
      <Text style = {{ fontSize: 20, fontWeight: '500' }}>
        Cash             $comingsoon
      </Text>
      <Text style = {{ fontSize: 20, fontWeight: '500'}}>
        Stocks         $comingsoon
      </Text>
      <Text style = {{ fontSize: 20, fontWeight: '500'}}>
        Crypto         $comingsoon
      </Text>
      </View>*/}
    <ScrollView>
        <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: HomeScreen },
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
  Home: HomeScreen,
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

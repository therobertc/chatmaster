import React, { Component } from 'react'
import {View, TouchableOpacity, Text, StatusBar, Platform, StyleSheet, ListView, ActivityIndicator, Image,Modal } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

import {Header, Left, Right, Icon, Body } from 'native-base'
import Chart from "./Graph";


class TopGainers extends Component {


    constructor(props){
        super();
        this.state = {
            data: null,
            apidata:null,
            isLoading: true,
            modalVisible: false,
            key:null,
            name:null,

        };
        this._renderGraph = this._renderGraph.bind(this);
         this._apiCall = this._apiCall.bind(this);

    }

    setModalVisible(visible,key,name) {
        console.log("hello");
        this.setState({modalVisible: visible});



        this.setState({

            key:key,
            name:name,
        });

    }


    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="trending-up" style={{fontSize:24, color: tintColor}} />
        )
    } ;

    _apiCall() {
        //console.log("hello");

        return fetch("https://top-gainers-app.herokuapp.com/", {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                //console.log("request is send and response is received",responseJson.results);
                //{service.name}, {service.price}, {service.change}, {service.rating}

                this.setState({
                    isLoading: false,
                    apidata: responseJson.results,
                    data:responseJson.results.map((service, index) => ({
                        key: `item-${index}`,
                        name:service.name,
                        price:service.price,
                        change:service.change,
                        rating:service.rating,
                        volume:service.volume,
                        label: service.name,
                        backgroundColor: 'white',
                        marginTop: 1,
                    }))

                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    componentWillMount(){
        this.setState({
            isLoading: true,
        });
        this._apiCall();

    }

    _renderGraph=()=>{
        console.log("render graph Hello Hello Hello ");


        if(this.state.modalVisible)
            return (
                <View style={{flex:1,backgroundColor:'#434343'}} >
                   <Chart name={this.state.name}/>
                </View>

            )
    };

    renderItem = ({ item, index, move, moveEnd, isActive }) => {

       // console.log("name      houuu",item);
        return (

                <TouchableOpacity
                    style={{
                        height: 100,
                        backgroundColor: isActive ? '#303030' : item.backgroundColor,
                        //alignItems: 'center',
                        //justifyContent: 'center' ,
                        flex:2,
                        flexDirection: 'column'

                    }}
                    onLongPress={move}
                    onPressOut={moveEnd}
                >
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 20,}}>


                                <Text style={{
                                    fontWeight: 'bold',
                                    color: '#3b5998',
                                    fontSize: 16,
                                    textAlign: 'left',
                                    paddingLeft: 20
                                }}>{''}{item.label}</Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: '#3b5998',
                                    fontSize: 16,

                                }}>{' $'}{item.price}</Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: '#3b5998',
                                    fontSize: 16,

                                }}>{' '}{item.change}</Text>

                            </View>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#808080',
                                fontSize: 12,
                                paddingLeft: 20
                            }}>Volume: {item.volume}</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#808080',
                                fontSize: 12,
                                paddingLeft: 20
                            }}>{'Rating: '}{item.rating}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:50, marginTop: 20, alignItems: 'right' }} >
                            <TouchableOpacity
                                style={{marginLeft: 5}}
                                onPress={() => {
                                    console.log("pressed");
                                    this.setModalVisible(!this.state.modalVisible,index,item.label);
                                }}
                            >
                            <Icon style={{color: '#808080'}} name="stats" />

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{marginLeft: 10}}
                            >
                                <Icon style={{color: 'white'}} name="md-chatboxes" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{marginLeft: 10}}
                            >
                                <Icon style={{color: 'white'}} name="ios-heart"/>
                                {/*onPress={() => this.props.navigation.openDrawer()}*/}
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>

        )
    };

    render() {


        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent: 'center',alignItems:'center', backgroundColor: 'white'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        console.log("In home screen");

        if(!this.state.modalVisible){
        return (

            <View style={{flex: 2}}>
                <Header style={{backgroundColor: '#3b5998'}}>
                    <Left>
                        <Icon style={{color: 'white'}} name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                    <Body>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', width: 150 }}>
                        TOP GAINERS
                    </Text>
                    </Body>
                    <Right>
                        <Icon style={{ color: 'white'}} name="search" onPress={()=> this.props.navigation.navigate('Search')}/>
                    </Right>

                </Header>

                <DraggableFlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `draggable-item-${item.key}`}
                    scrollPercent={5}
                    onMoveEnd={({ data }) => this.setState({ data })}
                />
            </View>

        );
        }
        if(this.state.modalVisible){
            return(<View style={{flex: 2}}>
                <Header style={{backgroundColor: '#212121'}}>
                    <Left>
                        <Icon style={{color: 'white'}} name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                    <Body>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', width: 150 }}>
                        TOP GAINERS
                    </Text>
                    </Body>
                    <Right>
                        <Icon style={{ color: 'white'}} name="search" onPress={() => this.props.navigation.openDrawer()}/>
                    </Right>

                </Header>
                {this._renderGraph()}

                <TouchableOpacity
                    style={{justifyContent:'center',alignItems: 'center',flexDirection:'row', height: 60}}
                    onPress={() => {this.setState({modalVisible:false})}}
                >
                    <Icon style={{color: 'black'}} name="md-arrow-back" />
                    <Text>{' '}Back</Text>
                </TouchableOpacity>
            </View>
            )
        }

    }
}



{/*const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;*/}


export default TopGainers;



const styles = StyleSheet.create({
    headerTop: {

        backgroundColor:'#3b5998',
        height:60,
        width:"100%"


    },
    statusBar: {
        height: 60,
    },
    image: {
        width: 100,
        height:100,
    },


});

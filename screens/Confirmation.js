import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native';

import { Header, Left, Right, Body, Icon, Button } from 'native-base'

import { createSwitchNavigator, } from 'react-navigation'

import { RectButton } from 'react-native-gesture-handler';

export default class Confirmation extends Component {
    constructor() {
        super()
        this.state = {
            showME: true
        }

    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showME: false
            })


        },
            3000)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'lightskyblue' }}>
                {
                    this.state.showME ?

                        <ActivityIndicator size="large" color="#0000ff" />
                        :
                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                            <View style={{ flex: 1, alignItems: 'center', marginTop: 160 }}>
                                <Image source={require('../assets/ChartBotWhiteLogo.png')} style={{
                                    height: 120, width: 120,
                                    borderRadius: 60
                                }} />
                                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}> Congrats on your new subscription!</Text>
                            </View>
                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'top', marginTop: 50 }}>
                                <Text style={{ fontWeight: '500', fontSize: 20 }}>
                                    Welcome to the community
          </Text>
                                <Button
                                    full
                                    rounded
                                    primary
                                    style={{ marginLeft: 50, marginRight: 50, marginTop: 30 }}
                                    onPress={() => this.props.navigation.navigate('Screener')}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', justifyContent: 'center' }}> View Screeners </Text>
                                </Button>
                            </View>
                        </View>
                }
            </View>

        );
    }
}
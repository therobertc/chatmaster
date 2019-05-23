import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VictoryArea, VictoryAxis, VictoryChart, VictoryScatter,VictoryVoronoiContainer} from "victory-native";
let DATA = [];
export default class Chart extends React.Component {

    constructor(props)
    {
        super();
        console.log("props",this.props);
        console.log("props1",props);
        this.state={
            data:null,
            name :props.name.toLowerCase(),
        }

    }
    reorderData = () => {
        const reorderedData = DATA.sort((a, b) => {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date) - new Date(b.date);
        });
        console.log(reorderedData);

        let arr = [];
        for (let j=0; j<reorderedData.length; j++)
        {
            // let tempdict = reorderedData[j];
            let tempdict = {};
            tempdict["x"] = j+1;
            tempdict["y"] = reorderedData[j].close;
            tempdict["datex"] = reorderedData[j].date;
            arr.push(tempdict)
        }

        //console.log("array is ", arr);

        this.setState({
            data: arr,
        });
    };


    async get_data_from_api() {
        console.log(this.state.name);
        try {
            let response = await fetch(
                'https://api.iextrading.com/1.0/stock/'+this.state.name+'/chart',
            );
            //console.log(response.json());
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        let result = await this.get_data_from_api();
        DATA = result;
        console.log("will mount",DATA);
        this.reorderData();
        console.log("reordered");
    }






    render() {
        return (
            <View style={styles.container}>
                <VictoryChart
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={(datum) => new Date(datum.datex).toDateString().split(" ").slice(1,3).join("-")+"|"+datum.y+""}
                        />
                    }
                >
                    <VictoryArea
                        interpolation={"natural"}
                        style={{ data: { fill: "#3A5B61", stroke: "#00AECC", strokeWidth: 2 }}}
                        data={this.state.data}

                    />
                    <VictoryAxis style={{ axis: {stroke: "none"} }}
                                 dependentAxis
                                
                    />
                </VictoryChart>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434343',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1000
    },
});

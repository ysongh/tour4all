import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/common/Button';

class CreateTrip extends Component{
    render(){
        const { 
            createTrip,
            createTrip__group1,
            createTrip__line,
            createTrip__plusBtn,
            createTrip__Label,
            margin } = styles;

        return(
            <View style={createTrip}>
                <View style={createTrip__group1}>
                    <Text>Start</Text>
                    <View style={createTrip__line}></View>
                    <View style={createTrip__line}></View>
                    <Text>End</Text>
                    <Button
                        buttonStyle={createTrip__plusBtn}
                        textStyle={createTrip__Label}
                        value="+" />
                </View>
                <View>
                    <Text>Destation</Text>
                    <Text style={margin}>New York</Text>
                    <Text style={margin}>New Jersey</Text>
                </View>
                <View>
                    <Text>Time</Text>
                    <Text style={margin}>10:00am</Text>
                    <Text style={margin}>12:00pm</Text>
                </View>
                
            </View>
        );
    };
};

const styles = StyleSheet.create({
    createTrip:{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    createTrip__group1:{
        alignItems: "center"
    },
    createTrip__plusBtn:{
        alignSelf: "center",
        backgroundColor: "#000000",
        borderRadius: 100,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    createTrip__Label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
    createTrip__line:{
        width: 2,
        height: 40,
        backgroundColor: "#000000",
        marginBottom: 5
    },
    margin: {
        marginVertical: 12
    }
});

export default CreateTrip;
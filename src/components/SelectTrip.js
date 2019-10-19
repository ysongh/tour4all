import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Button from '../components/common/Button';

class SelectTrip extends Component{
    render(){
        const { 
            selectTrip,
            selectTrip__group,
            selectTrip__btn,
            selectTrip__Label,
            selectTrip__plusBtn,
            selectTrip__label,
            margin } = styles;

        return(
            <View style={selectTrip}>
                <View style={selectTrip__group}>
                    <Text style={selectTrip__label}>Sep5 - Sep15</Text>
                    <Button
                        buttonStyle={selectTrip__btn}
                        textStyle={selectTrip__Label}
                        value="Bahauas Trip" />
                </View>
                
                <View style={margin}></View>
                <View style={selectTrip__group}>
                    <Text style={selectTrip__label}>Sep11 - Sep12</Text>
                    <Button
                        buttonStyle={selectTrip__btn}
                        textStyle={selectTrip__Label}
                        value="NY Trip" />

                    <View style={margin}></View>
                </View>

                <Button
                    buttonStyle={selectTrip__plusBtn}
                    textStyle={selectTrip__Label}
                    value="+"
                    onPress = {() => Actions.createTrip()} />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    selectTrip:{
        marginTop: 100,
        alignItems: "center"
    },
    selectTrip__group:{
        width: 200,
    },
    selectTrip__label:{
        fontSize: 25
    },
    selectTrip__btn:{
        width: "100%",
        backgroundColor: "#000000",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    selectTrip__plusBtn:{
        alignSelf: "center",
        backgroundColor: "#000000",
        borderRadius: 100,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    selectTrip__Label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
    margin:{
        marginVertical: 10
    }
});

export default SelectTrip;
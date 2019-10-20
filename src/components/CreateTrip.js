import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import InvitePeople from '../components/InvitePeople';
import Button from '../components/common/Button';

class CreateTrip extends Component{
    state = {
        data: [
            {
                city: "New York",
                time: "10:00am"
            },
            {
                city: "New Jersey",
                time: "12:00pm"
            }
        ]
    };
    render(){
        const { 
            createTrip,
            createTrip__title,
            createTrip__subTitle,
            createTrip__container,
            createTrip__group1,
            createTrip__line,
            createTrip__plusBtn,
            createTrip__Label,
            margin } = styles;

        return(
            <View style={createTrip}>
                <Text style={createTrip__title}>Schedule</Text>
                <View style={createTrip__container}>
                    <View style={createTrip__group1}>
                        <Text style={createTrip__subTitle}>Start</Text>
                        <View style={createTrip__line}></View>
                        <View style={createTrip__line}></View>
                        <Text style={createTrip__subTitle}>End</Text>
                        <Button
                            buttonStyle={createTrip__plusBtn}
                            textStyle={createTrip__Label}
                            value="+" />
                    </View>
                    <View>
                        <Text style={createTrip__subTitle}>Destation</Text>
                        <FlatList 
                            keyExtractor={item => item.city}
                            data={this.state.data}
                            renderItem={({ item }) => {
                                return (
                                    <Text style={margin}>{item.city}</Text>
                                )}} />
                    </View>
                    <View>
                        <Text style={createTrip__subTitle}>Time</Text>
                        <FlatList 
                            keyExtractor={item => item.city}
                            data={this.state.data}
                            renderItem={({ item }) => {
                                return (
                                    <Text style={margin}>{item.time}</Text>
                                )}} />
                    </View>
                </View>
                
                <InvitePeople />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    createTrip:{
        marginTop: 50
    },
    createTrip__title:{
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5
    },
    createTrip__subTitle:{
        fontSize: 20
    },
    createTrip__container:{
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
        marginTop: 5
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
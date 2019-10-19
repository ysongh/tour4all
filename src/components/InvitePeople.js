import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Button from '../components/common/Button';

class InvitePeople extends Component{
    render(){
        const { 
            invitePeople,
            invitePeople__title,
            invitePeople__container,
            invitePeople__group,
            invitePeople__Label,
            invitePeople__plusBtn,
            invitePeople__label,
            margin } = styles;

        return(
            <View style={invitePeople}>
                <Text style={invitePeople__title}>Invite</Text>
                <View style={invitePeople__container}>
                    <View style={invitePeople__group}>
                        <Text style={invitePeople__label}>Name</Text>
                        <Text style={margin}>Bob</Text>
                        <Button
                            buttonStyle={invitePeople__plusBtn}
                            textStyle={invitePeople__Label}
                            value="+" />
                    </View>
                    <View style={invitePeople__group}>
                        <Text style={invitePeople__label}>Phone</Text>
                        <Text style={margin}>111-111-1111</Text>
                    </View>
                    <View style={invitePeople__group}>
                        <Text style={invitePeople__label}>Cruise_ID</Text>
                        <Text style={margin}>12345</Text>
                    </View>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    invitePeople:{
        marginTop: 20
    },
    invitePeople__title:{
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 5
    },
    invitePeople__container:{
        flexDirection: "row",
        justifyContent: "space-around"
    },
    invitePeople__group:{
        
    },
    invitePeople__label:{
        fontSize: 20
    },
    invitePeople__btn:{
        width: "100%",
        backgroundColor: "#000000",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    invitePeople__plusBtn:{
        alignSelf: "center",
        backgroundColor: "#000000",
        borderRadius: 100,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5
    },
    invitePeople__Label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
    margin:{
        marginVertical: 10
    }
});

export default InvitePeople;
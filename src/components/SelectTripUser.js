import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Button from './common/Button';
import Input from './common/Input';
import TripDetails from './TripDetails';

class SelectTrip extends Component{

    render(){
        const { 
            container,
            title,
            login,
            buttonContainer,
            search__btn,
            search__Label,


            login__fbButton,
            login__Label,
            login__LabelSelected,
            login__btnGroup,
            login__btn,
            login__btnSelected,
            login__input } = styles;

        return(
            <View style={login}>
                 
                 <View style={login__btnGroup}>
                    <Text  style={title}>In progress</Text>
                    <Button
                        buttonStyle={login__btn}
                        value="New York City"
                        textStyle={login__Label}
                        onPress={() => this.inputForLeader()} />
                    <Button
                        buttonStyle={login__btn}
                        value="Washington DC"
                        textStyle={login__Label}
                        onPress={() => this.inputForLeader()} />
                </View>

                 <View style={login__btnGroup}>
                    <Text  style={title}>Waiting to join</Text>
                    <Button
                        buttonStyle={login__btn}
                        value="Japon"
                        textStyle={login__Label}
                        onPress={() => this.inputForLeader()} />
                    <Button
                        buttonStyle={login__btn}
                        value="Spain"
                        textStyle={login__Label}
                        onPress={() => this.inputForLeader()} />
                </View>

                <View style={login__btnGroup}>
                    <Button
                        buttonStyle={search__btn}
                        value="Add Trip +"
                        textStyle={search__Label}
                        onPress={() => this.inputForLeader()} />
                </View>


            </View>
        );
    };
};

const styles = StyleSheet.create({
    // login:{
    //     marginTop: 150,
    // },
    title:{
        color: 'orange',
        textAlign: 'center',
        paddingBottom:10,
        fontSize: 25,
    },
    buttonContainer:{
        backgroundColor: 'gray',
        paddingVertical: 15,
        marginBottom: 5,
    },
    login__btnGroup:{
        flexDirection: "column",
        alignSelf: "center",
        marginTop: 20
    },
    login__btn:{
        width: 250,
        backgroundColor: "#f2ebeb",
        color: "#000000",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },

    search__btn:{
        width: 300,
        backgroundColor: "#3498db",
        color: 'white',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        fontWeight: "bold",
    },
    search__Label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },




    // login__fbButton:{
    //     alignSelf: "center",
    //     backgroundColor: "#000000",
    //     borderRadius: 5,
    //     padding: 10,
    //     marginTop: 10
    // },
    // login__Label:{
    //     fontSize: 15,
    //     fontWeight: "bold",
    //     textAlign: "center",
    //     color: "#000000"
    // },
    // login__LabelSelected:{
    //     fontSize: 15,
    //     fontWeight: "bold",
    //     textAlign: "center",
    //     color: "#000000"
    // },


    // login__btnSelected:{
    //     width: 120,
    //     backgroundColor: "#000000",
    //     color: "#ffffff",
    //     borderRadius: 5,
    //     padding: 10,
    //     marginTop: 10
    // },
    // login__input:{
    //     height: 40,
    //     width: '90%',
    //     alignSelf: "center",
    //     backgroundColor: '#dcdee0',
    //     paddingRight: 5,
    //     paddingLeft: 5,
    //     fontSize: 15,
    // }
})

export default SelectTrip;
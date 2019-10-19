import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';

import Button from './common/Button';
import Input from './common/Input';
import itenerary from '../img/ite.png';

class Itenerary extends Component{

    render(){
        const { 
            container,
            item1,
            item2, 
            title,
            login,
            g_container,
            buttonContainer,
            search__btn,
            search__Label,
            chat_view,
            save__fbButton,


            login__fbButton,
            login__Label,
            login__LabelSelected,
            login__btnGroup,
            login__btn,
            login__btnSelected,
            login__input } = styles;

        return(
            <View style={styles.g_container}>
                <View>
                    <Image source={itenerary} style={{  width: '100%', height: 657}} />

                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20
      },
    login:{
        marginTop: 90,
    },
    chat_view:{
        height:365,
        backgroundColor:"white"
    },
    g_container: {
    },
    container: {
        flexDirection: "row",
    },
    item1: {
        width: '80%' // is 50% of container width
    },
    item2: {
        width: '20%',
        backgroundColor: '#3498db'
    },
    login__Label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
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
    save__fbButton:{
        alignSelf: "center",
        backgroundColor: "#3498db",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
})

export default Itenerary;
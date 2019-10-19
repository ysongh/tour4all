import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';

import Button from './common/Button';
import Input from './common/Input';
import map from '../img/map.png';
import chatImg from '../img/chat.png';

class TripDetails extends Component{

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
                    <Image source={map} style={{  width: '100%', height: 250}} />

                </View>

                {/* <View>
                    <Image source={chatImg} style={{  width: '100%', height: 250}} />
                </View> */}

                <ScrollView style={chat_view}>
                <Image source={chatImg} style={{  width: '99%', height: 300}} />
                </ScrollView>

                <View style={styles.container}>
                    <View style={item1}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="your message"
                        maxLength={200}
                        />
                    </View>
                    <View style={item2}>
                        <Button
                        buttonStyle={save__fbButton}
                        textStyle={login__Label}
                        value="Send" />
                    </View>
                    
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
        marginTop: 90,
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

export default TripDetails;
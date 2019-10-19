import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from '../components/common/Button';

class Login extends Component{
    render(){
        const { 
            login,
            login__fbButton,
            login__btnGroup,
            login__btn } = styles;

        return(
            <View style={login}>
                <Button
                    buttonStyle={login__fbButton}
                    value="Continue With FB"/>
                <View style={login__btnGroup}>
                    <Button
                        buttonStyle={login__btn}
                        value="Leader"/>
                    <Button
                        buttonStyle={login__btn}
                        value="User"/>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    login:{
        marginTop: 200,
    },
    login__fbButton:{
        alignSelf: "center",
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    login__btnGroup:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30
    },
    login__btn:{
        width: 120,
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
})

export default Login;
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from '../components/common/Button';
import Input from '../components/common/Input';

class Login extends Component{
    state = {
        leaderSelected: false,
        userSelected: false,
        showInput: false
    };

    inputForLeader(){
        this.setState({
            showInput: true,
            leaderSelected: true,
            userSelected: false
        });
    };

    inputForUser(){
        this.setState({
            showInput: false,
            leaderSelected: false,
            userSelected: true
        });
    };
    
    render(){
        const { 
            login,
            login__fbButton,
            login__Label,
            login__LabelSelected,
            login__btnGroup,
            login__btn,
            login__btnSelected,
            login__input } = styles;

        return(
            <View style={login}>
                <Button
                    buttonStyle={login__fbButton}
                    textStyle={login__Label}
                    value="Continue With FB" />

                {this.state.showInput ? <Input 
                    placeholder={this.state.leaderSelected ? "ID" : ""}
                    inputStyle={login__input}/> : null }

                <View style={login__btnGroup}>
                    <Button
                        buttonStyle={this.state.leaderSelected ? login__btnSelected : login__btn}
                        value="Leader"
                        textStyle={this.state.leaderSelected ? login__Label : login__LabelSelected}
                        onPress={() => this.inputForLeader()} />
                    <Button
                        buttonStyle={this.state.userSelected ? login__btnSelected : login__btn}
                        value="User"
                        textStyle={this.state.userSelected ? login__Label : login__LabelSelected}
                        onPress={() => this.inputForUser()}/>
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
        backgroundColor: "#000000",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    login__Label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
    login__LabelSelected:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"
    },
    login__btnGroup:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30
    },
    login__btn:{
        width: 120,
        backgroundColor: "#f2ebeb",
        color: "#ffffff",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    login__btnSelected:{
        width: 120,
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    login__input:{
        height: 40,
        width: '90%',
        alignSelf: "center",
        backgroundColor: '#dcdee0',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
    }
})

export default Login;
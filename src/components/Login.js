import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Logo from '../../src/components/img/Logo.jpg';

class Login extends Component{
    state = {
        leaderSelected: false,
        userSelected: false,
        showInput: false,
        showButton: false
    };

    inputForLeader(){
        this.setState({
            showInput: true,
            showButton: false,
            leaderSelected: true,
            userSelected: false
        });
    };

    inputForUser(){
        this.setState({
            showInput: false,
            showButton: true,
            leaderSelected: false,
            userSelected: true
        });
        
    };
    
    render(){
        const { 
            login,
            login__image,
            login__fbButton,
            login__Label,
            login__LabelSelected,
            login__btnGroup,
            login__btn,
            login__btnSelected,
            login__input } = styles;

        return(
            <View style={login}>
                <Image source={Logo} style={login__image}/>
                <Button
                    buttonStyle={login__fbButton}
                    textStyle={login__Label}
                    value="Continue With FB"
                    onPress={() => Actions.selectTripUser()}/>

                {this.state.showInput ? 
                    <Input 
                        placeholder={this.state.leaderSelected ? "ID" : ""}
                        inputStyle={login__input}
                        onEndEditing = {() => Actions.selectTrip()} />
                     : null }

                {/* {this.state.showButton ? 
                    <Button
                        buttonStyle={login__fbButton}
                        textStyle={login__Label}
                        value="Continue as User"
                        onPress={() => Actions.selectTripUser()} />
                    : null } */}

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
        marginTop: 50,
    },
    login__image:{
        alignSelf: "center",
        width: 200,
        height: 200,
        marginBottom: 50
    },
    login__fbButton:{
        width: 220,
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
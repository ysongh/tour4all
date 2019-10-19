import React, {Component} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

import Input from '../components/common/Input';
import Button from '../components/common/Button';

class AddPeople extends Component{
    state = {
        name: "",
        phone: "",
        cruise_id: ""
    };

    render(){
        const { addPeople, addPeople__title, addPeople__Area, addPeople__btn, addPeople__label } = styles;

        return(
            <Modal
                visible={this.props.visible}
                transparent
                animationType="fade"
                onRequestClose={() => {}}>
                <View style={addPeople}>
                    <View style={addPeople__Area}>
                        <Text style={addPeople__title}>Invite Someone</Text>
                        <Input
                            value={this.state.name}
                            placeholder="Name"
                            onChangeText = {name => this.setState({ name })} />
                        <Input
                            value={this.state.phone}
                            placeholder="Phone Number"
                            onChangeText = {phone => this.setState({ phone })} />
                        <Input
                            value={this.state.cruise_id}
                            placeholder="Cruise_id"
                            onChangeText = {cruise_id => this.setState({ cruise_id })} />
                        <Button
                            buttonStyle={addPeople__btn}
                            value="Add"
                            textStyle={addPeople__label}
                             />
                        <Button
                            buttonStyle={addPeople__btn}
                            value="Close"
                            textStyle={addPeople__label}
                            onPress={this.props.onCancel} />
                    </View>
                </View>
            </Modal>
        );
    };
};

const styles = StyleSheet.create({
    addPeople:{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
    },
    addPeople__title:{
        fontSize: 25,
        padding: 5,
        textAlign: 'center'
    },
    addPeople__Area:{
        backgroundColor: 'white',
        marginTop: 150,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    addPeople__btn:{
        width: 240,
        alignSelf: "center",
        backgroundColor: "#000000",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    },
    addPeople__label:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
});

export default AddPeople;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearYou = () => {
    const { 
        nearYou,
        nearYou__title,
        nearYou__text,
        green,
        red } = styles;

    return(
        <View style={nearYou}>
            <Text style={nearYou__title}>New York</Text>
            <Text style={nearYou__text}>Joe</Text>
            <Text style={green}>Jake</Text>
            <Text style={nearYou__text}>Jill</Text>

            <Text style={nearYou__title}>New Jeresy</Text>
            <Text style={nearYou__text}>Bob</Text>
            <Text style={nearYou__text}>Sam</Text>
            <Text style={red}>Jeeny</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   nearYou:{
       padding: 10
   },
   nearYou__title:{
       fontSize: 25,
       fontWeight: "bold",
       borderBottomWidth: 10
   },
   nearYou__text:{
       fontSize: 18
   },
   green:{
       color: "green",
       fontSize: 18
   },
   red:{
        color: "red",
        fontSize: 18
    }
})

export default NearYou;
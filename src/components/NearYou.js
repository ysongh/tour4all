import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearYou = () => {
    const { 
        nearYou,
        nearYou__title} = styles;

    return(
        <View style={nearYou}>
            <Text style={nearYou__title}>New York</Text>
            <Text>Joe</Text>
            <Text>Jake</Text>
            <Text>Jill</Text>

            <Text style={nearYou__title}>New Jeresy</Text>
            <Text>Bob</Text>
            <Text>Sam</Text>
            <Text>Jeeny</Text>
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
       
   }
})

export default NearYou;
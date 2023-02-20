import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';


let styles = StyleSheet.styles;


const BACCalc = ({route, navigation}) => {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // TEST DATA FOR CARDS AT THE BOTTOM
    route.drinks = ["mimosa", "sake"]

    // If we haven't already added a drink yet then initialize the drinks array 
    if (typeof route.drinks == 'undefined') {
        route.params.drinks = []
    } 


    const getAllKeys = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          console.log('Async storage keys:', keys);
        } catch (error) {
          console.log(error);
        }
    }

    getAllKeys()

    // TODO: create the array that will hold the different drinks that people add
    // TODO: pass the array to AddDrinks page
    // TODO: create a button in AddDrinks that adds a drink to the array
    // TODO: create a simple text display of the array on the BACCAlc page 
    // TODO: build the cards of the drinks added below the add drink button
    // TODO: make the BAC number updateable
    // TODO: add a buffer div to the top of the page

    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>BAC 0.00%</Text>
            <Button
                onPress={() => changeInsideOut(true)}
                title="Inside"
                color="#841584"
                accessibilityLabel="Change the description to the inside version"
            />
            <Button
                onPress={() => changeInsideOut(false)}
                title="Out"
                color="#841584"
                accessibilityLabel="Change the description to the outside version"
            />
            <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            <Button
                onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink', drinks: route.drinks})}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Add a drink"
            />
            {
                route.drinks.map((drink, index) => (
                    <Text key={index}>{drink}</Text>
                ))
            }
        </View>
    );
};


export default BACCalc
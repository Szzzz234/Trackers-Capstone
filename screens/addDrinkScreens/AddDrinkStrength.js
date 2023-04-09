import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import displayBasedOnType from '../../components/AddDrink-components/displayBasedOnType';
import handleInput from '../../components/addDrink-components/handleInput';

import strengths from "../../json/AddDrink-pages/drinkStrengths.json"
import types from "../../json/AddDrink-pages/drinkTypes.json"

const AddDrinkSize = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const [data, setData] = useState(null)
    let newKey = "strength"
    let nextPage = "AddDrinkHunger"

    // Finds the sizes we need to display based on what type we selected in the screen before
    useEffect(() => {
        setData(displayBasedOnType(types, newDrink, 'strengths', strengths))
    }, [])

    const handleAddDrinksInput = (newValue) => {
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    if (data !== null) {
        return (
            <ScrollView>
                <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
            </ScrollView>
        )
    } else {
        return(<ScrollView></ScrollView>)
    }
 
}

export default AddDrinkSize
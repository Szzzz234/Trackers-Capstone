import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import styles
import { containerStyles } from '../styles/containerStyles';
import { imageStyles } from '../styles/imageStyles';
import { textStyles } from '../styles/textStyles';
import { drinkCardStyles } from '../styles/drinkCardStyles';

const CalcDrinkCards = ({ drinks, navigation, changeDrinksReady } ) => {
  // console.log(drinks);
  // console.log(typeof(drinks));
  // console.log(drinks.filter(item => !item.hasOwnProperty('name') || item.name !== 'Wine/Sake (15.0%)'))

  const handleDelete = async (drink) => {
    //console.log("inside handleDelete", drink);
    try {
      let drinksDelete = drinks.filter(obj => !Object.entries(drink).every(([key, value]) => obj[key] === value));
      let drinksToSend = JSON.stringify(drinksDelete)
      await AsyncStorage.setItem('drinks', drinksToSend)
      changeDrinksReady(false)
      //navigation.navigate('BAC Calc')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ width: '100%' }}>
      {drinks.length !== 0 ?
        <View style={containerStyles.row}>
          {drinks.map((drink, index) => (
            <View key={index} style={[drinkCardStyles.drinkCard, containerStyles.row, {display: "flex", justifyContent:"space-between"}]}>
              <View style={{display:"flex", flexDirection:"row"}}>
                <View style={{display: "flex", alignItems: 'center', flexDirection:'column', justifyContent:'center'}}>
                  <Text style={[textStyles.redSemiBoldText, textStyles.smallText]}>{new Date(drink.timeOfDrink).toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).split(', ')[0]}</Text>
                  <Text style={[textStyles.redSemiBoldText, textStyles.smallText]}>{new Date(drink.timeOfDrink).toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).split(', ')[1]}</Text>
                </View>
                <View style={{display: "flex", justifyContent:'center', marginLeft: 10}}>
                  <Text style={textStyles.boldText}>{drink.name} ({(drink.strength * 100).toFixed(1)}%)</Text>
                  <Text style={[textStyles.text, textStyles.smallText]}>{drink.size.value * 1e3} ml</Text>
                </View>
              </View>
              <Pressable onPress={() => handleDelete(drink)}>
                <Ionicons name='close' style={imageStyles.deleteIcon}  />
              </Pressable>
            </View>
          ))}
        </View>
        :
        <Text style={{ color: 'white' }}>Add in drinks to see cards</Text>
      }
    </View>
  )
}

export default CalcDrinkCards;
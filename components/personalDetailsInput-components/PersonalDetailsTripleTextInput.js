import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

// Import styles
import { containerStyles } from "../../components/styles/containerStyles";
import { textInputStyles } from "../../components/styles/textInputStyles";

const PersonalDetailsTripleTextInput = ({
  label1,
  label2,
  label3,
  setInputValue1,
  inputValue1,
  setInputValue2,
  inputValue2,
  setInputValue3,
  inputValue3,
}) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={containerStyles.threeColumnContainer}>
        <Text style={textInputStyles.label}>{label1}</Text>
        <Text style={textInputStyles.label}>{label2}</Text>
        <Text style={textInputStyles.label}>{label3}</Text>
      </View>
      <View style={containerStyles.threeColumnContainer}>
        <TextInput
          style={textInputStyles.textInput}
          value={inputValue1}
          onChangeText={setInputValue1}
        />
        <TextInput
          style={textInputStyles.textInput}
          value={inputValue2}
          onChangeText={setInputValue2}
        />
        <TextInput
          style={textInputStyles.textInput}
          value={inputValue3}
          onChangeText={setInputValue3}
        />
      </View>
    </View>
  );
};

export default PersonalDetailsTripleTextInput;

import React, { useState } from 'react';
import { Text, View, LayoutAnimation, ScrollView, UIManager, Platform, Image, ImageBackground } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'

// Import json data of topic q and as
import data from '../json/topics.json'
import BACeffects from '../json/bac-levels.json'
import mixlogy from "../json/mixology/mixology.json";
import selfcare from "../json/selfcareTips/selfcareTips.json"

// Import components
import TitleText from './Title';
import Expandable from './Expandable';

// Import styles
import { containerStyles } from './styles/containerStyles';
import { imageStyles } from './styles/imageStyles';
import { textStyles } from './styles/textStyles';
import { tableStyles } from './styles/tableStyles';

// Page to export 
const InfoTopicPage = ({ route }) => {
    // Get all question and answer of topic 
    const topicData = data.find(object => {
        return object.topicid === route.params.title
    })
    // Set q and a
    const CONTENT = topicData.qa
    // Get topic icon
    const topicIcon = topicData.icon

    const [listDataSource, setListDataSource] = useState(CONTENT);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // To add animation and expanded parameter
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        // Allow multiple select
        array[index]['isExpanded'] = !array[index]['isExpanded'];
        setListDataSource(array);
    };

    // Show standard drink sizes image if the topic is Standard Drink Sizes
    const showImage = () => {
        if (topicData.topicid === "Standard Drink Sizes") {
            // Use require() to fetch image
            const imageUrl = require('../assets/images/Standard_Drink_Sizes.png')
            // Return View component with Text and Image
            return (
                <ScrollView>
                    <View style={[containerStyles.row, containerStyles.specialInfoItem]}>
                        <Text style={[textStyles.text, textStyles.questionText]}>Standard Drink Sizes Visualized</Text>
                    </View>
                    <Image
                        source={imageUrl}
                        style={imageStyles.standardDrinksImage}
                    />
                </ScrollView>
            )
        }
    }

    // Show BAC table if the topic is BAC Levels and Effects
    const showTable = () => {
        if (topicData.topicid === "BAC Levels and Effects") {
            const headTable = ['BAC Level', 'Effects'];
            return (
                <View style={{ width: 327 }}>
                    <Text style={[textStyles.text, textStyles.questionText, containerStyles.specialInfoItem]}>BAC Levels: Table</Text>
                    <Table borderStyle={tableStyles.border} style={[containerStyles.specialInfoItem, { paddingTop: 0, paddingBottom: 0, marginBottom: '2%' }]}>
                        <Row data={headTable} style={tableStyles.head} textStyle={tableStyles.headText} widthArr={[100, undefined]} />
                        <Rows data={BACeffects} textStyle={tableStyles.text} widthArr={[100, undefined]} />
                    </Table>
                </View>
            )
        }
    }
    const showSelfcare = () => {
        if (topicData.topicid === "Self Care") {
            const headTable = ['Method', 'description', 'Tips'];
            return (
                <View style={{ width: 327 }}>
                    <Text style={[textStyles.text, textStyles.questionText, containerStyles.specialInfoItem]}>Selfcare Tips</Text>
                    <Table borderStyle={tableStyles.border} style={[containerStyles.specialInfoItem, { paddingTop: 0, paddingBottom: 0, marginBottom: '2%' }]}>
                        <Row data={headTable} style={tableStyles.head} textStyle={tableStyles.headText} widthArr={[100, undefined]} />
                        <Rows data={selfcare} textStyle={tableStyles.text} widthArr={[100, undefined]} />
                    </Table>
                </View>
            )
        }
    }

    // show Mix
    const showMixology = () => {
        if (topicData.topicid === "Mixing Notice") {
            const headTable = ['Medication', 'Effects'];
            return (
                <View style={{ width: 327 }}>
                    <Text style={[textStyles.text, textStyles.questionText, containerStyles.specialInfoItem]}>Mixology: Table</Text>
                    <Table borderStyle={tableStyles.border} style={[containerStyles.specialInfoItem, { paddingTop: 0, paddingBottom: 0, marginBottom: '2%' }]}>
                        <Row data={headTable} style={tableStyles.head} textStyle={tableStyles.headText} widthArr={[100, undefined]} />
                        <Rows data={mixlogy} textStyle={tableStyles.text} widthArr={[100, undefined]} />
                    </Table>
                </View>
            )
        }
    }

    // Return page view
    return (
      <ScrollView style={containerStyles.phoneScreen}>
        <ImageBackground
          source={require("../assets/images/Frame.png")}
          style={imageStyles.backgroundHeading}
          resizeMode="cover"
        >
          <View style={[containerStyles.row, containerStyles.titleContainer]}>
            <TitleText name={route.params.title} />
            <Image
              style={[imageStyles.rightImage, imageStyles.topicIcon]}
              source={require("../assets/info-icons/" + topicIcon)}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
        <View style={containerStyles.centerContainer}>
          {listDataSource.map((item, key) => (
            <Expandable
              key={item.question}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
          <View style={containerStyles.centerWhiteContainer}>
            {showImage()}
            {showTable()}
            {showSelfcare()}
            {showMixology()}
          </View>
        </View>
      </ScrollView>
    );
}

export default InfoTopicPage;
import { Pressable, Text, View, Image, ScrollView, ImageBackground } from 'react-native';

// Import components
import TitleText from '../components/Title';

// Set style 
import { containerStyles } from '../components/styles/containerStyles';
import { buttonStyles } from '../components/styles/buttonStyles';
import { imageStyles } from '../components/styles/imageStyles';
import { textStyles } from '../components/styles/textStyles';

// Page to be returned
// Has different buttons for the different topics that are available on information hub
export const InfoPage = (props) => {

  return (
    <ScrollView>
      {/* <View style={[containerStyles.row, containerStyles.titleContainer]}>
        <TitleText name={"Information Hub"}></TitleText>
        <Image style={imageStyles.rightImage} source={require('../assets/avatars/Scientist_Rosie.png')} resizeMode='contain' />
      </View> */}

      <ImageBackground
        source={require("../assets/images/Frame.png")}
        style={imageStyles.backgroundHeading}
        resizeMode="cover"
      >
        <View style={[containerStyles.row]}>
          <TitleText name={"Information Hub"}></TitleText>
          <Image
            source={require("../assets/avatars/Scientist_Rosie.png")}
            style={imageStyles.rightImage}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>

      {/* <ClearDrinksButton/> */}
      <View style={[containerStyles.row, containerStyles.centerContainer]}>
        {/* <Text style={{ marginBottom: 15 }}>Hi there, welcome to our Information Hub! What alcohol information are you looking for?</Text> */}
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          onPress={() => props.navigation.navigate("CommonAlcoholTypes")}
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/alcoholic-drink.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Common Alcohol Types</Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          title="Alcohol Physical Effects"
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "Alcohol Physical Effects",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/endocrine-system.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>
            Alcohol Physical Effects
          </Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          title="BAC Levels and Effects"
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "BAC Levels and Effects",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/drunk.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>
            BAC Levels and Effects
          </Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "Measuring Alcohol Content",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/alcohol-free.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>
            Measuring Alcohol Content
          </Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          title="Standard Drink Sizes"
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "Standard Drink Sizes",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/volume.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Standard Drink Sizes</Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "Social Drinking",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/cheers.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Social Drinking</Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "Drinking Safety Tips",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/protection.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Drinking Safety Tips</Text>
        </Pressable>
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", { title: "Resources" })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/search-worldwide.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Resources</Text>
        </Pressable>
        {/* self-care */}
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          title="Self Care"
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", { title: "Self Care" })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/self-care-icon-2.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Self Care</Text>
        </Pressable>
        {/* mixology */}
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", { title: "Mixing Notice" })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              source={require("../assets/info-icons/mixology-icon.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>Mixing Notice</Text>
        </Pressable>
        {/* FAQ */}
        <Pressable
          style={[
            buttonStyles.alignLeft,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          title="FAQs About Hangovers"
          onPress={() =>
            props.navigation.navigate("InfoTopicPage", {
              title: "FAQs About Hangovers",
            })
          }
        >
          <View style={containerStyles.reverseRow}>
            <Image
              style={imageStyles.hubIcon}
              // <a target="_blank" href="https://icons8.com/icon/15843/question-mark">Question Mark</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
              source={require("../assets/info-icons/question-mark.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyles.whiteSemiBoldText}>FAQs About Hangovers</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}


export const InformationHub = ({ navigation }) => {
  return (
    <ScrollView style={containerStyles.phoneScreen}>
      <InfoPage navigation={navigation} />
    </ScrollView>
  );
};
import { Text, View, Image, ScrollView, ImageBackground } from "react-native";

// import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

// Create and return page that displays mission and about team
const OurMission = () => {
    return (
      <View style={[containerStyles.centerWhiteContainer]}>
        <ScrollView style={[containerStyles.phoneScreen]}>
          <ImageBackground
            source={require("../../assets/images/Frame.png")}
            style={{ width: "375", height: "163" }}
            resizeMode="cover"
          >
            <View style={[containerStyles.row, containerStyles.titleContainer]}>
              <TitleText name={"Our Mission"} />
              <Image
                style={imageStyles.rightImage}
                source={require("../../assets/avatars/Casual_Rosie.png")}
                resizeMode="contain"
              />
            </View>
          </ImageBackground>
          <View
            style={[
              containerStyles.centerWhiteContainer,
              { justifyContent: "flex-start" },
            ]}
          >
            <Text style={containerStyles.centerContainer}>
              Our goal with this app is to{" "}
              <Text style={textStyles.redSemiBoldText}>
                increase alcohol health literacy in young adults
              </Text>
              , particularly those who identify within marginalized and
              vulnerable genders. We aim to accomplish this through increasing
              our users' knowledge and understanding of safe alcohol consumption
              practices. We're here to support you in becoming as informed as
              possible!
            </Text>
            <Text style={containerStyles.centerContainer}>
              This is an application built by young adults, for young adults!
              Drinking can be intimidating, especially if you don't know how
              alcohol affects you, and BACtracker is here to help.
            </Text>
            <Text style={[textStyles.redSemiBoldText, textStyles.size16]}>
              About the Creators:
            </Text>
            <Text style={containerStyles.centerContainer}>
              We are <Text style={textStyles.redSemiBoldText}>Team iBant</Text>,
              a group of four undergraduate students at the University of
              Washington Information School. For our Capstone project, we
              decided to create a convenient and comprehensive toolkit to bridge
              the current information gap in alcohol education and support young
              adults like us.
            </Text>
            <Text
              style={[
                textStyles.redSemiBoldText,
                containerStyles.centerContainer,
              ]}
            >
              From left to right below: Melina Perraut, Emiri Nishizawa, Roshni
              Srikanth, and Gisele Fox.{" "}
            </Text>
            <View
              style={[containerStyles.row, { width: "100%", height: "125px" }]}
            >
              <Image
                style={containerStyles.fourColumnContainer}
                source={require("../../assets/avatars/iBant/Melina avatar.png")}
              />
              <Image
                style={containerStyles.fourColumnContainer}
                source={require("../../assets/avatars/iBant/Emiri avatar.png")}
              />
              <Image
                style={containerStyles.fourColumnContainer}
                source={require("../../assets/avatars/iBant/Roshni avatar.png")}
              />
              <Image
                style={containerStyles.fourColumnContainer}
                source={require("../../assets/avatars/iBant/Gisele avatar.png")}
              />
            </View>
            <Text style={containerStyles.centerContainer}>
              We are <Text style={textStyles.redSemiBoldText}>Team Trackers</Text>,
              a group of five undergraduate students at the University of
              Washington Information School: Junna Cao, Niyat Efrem, Pooja Thorali, Xuemin Zeng, Junhan Sid Zhang
              We followed work by <Text style={textStyles.redSemiBoldText}>Team iBant</Text>,
              updated the interface, content in information hub, and added new features, including emotion slider,
              emergency contant, notification.
            </Text>
            <Text style={[textStyles.redSemiBoldText, textStyles.size16]}>
              Our Findings and Solution Approach:
            </Text>
            <Text style={containerStyles.centerContainer}>
              Overuse of alcohol at a young age can lead to dangerous
              in-the-moment and long-term consequences. However, current legal
              restrictions and preventive approaches are{" "}
              <Text style={textStyles.redSemiBoldText}>not sufficient</Text> to
              reduce alcohol abuse; information gaps and misinformation
              regarding alcohol safety remain. Lack of alcohol knowledge, social
              pressures, and underdeveloped brains also contribute to this
              issue. The information is out there, but this generation needs an
              easy way to access it.
            </Text>
            <Text style={containerStyles.centerContainer}>
              To address this problem space, we created{" "}
              <Text style={textStyles.redSemiBoldText}>BACtracker</Text>, an app
              providing easy-to-access information about alcohol and safe
              drinking practices to young adults, especially those within gender
              minorities. Our app is specifically catered to our audience and
              helps our users make more informed, accurate decisions about
              alcohol consumption to keep them and their communities safe.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
};

export default OurMission
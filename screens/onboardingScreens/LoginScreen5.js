import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

// Fifth Login Screen: Medical disclaimer
const LoginScreen5 = ({navigation}) => {
    return (
        <View>
            <Text>
                Disclaimer
                The alcohol-focused algorithms used in this application are based on currently available information. This means that they may not be completely accurate and can change over time. 
                This app is not meant to substitute the advice of a licensed medical professional. Please use this resource with caution!
            </Text>
            <Footer  rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login6');}} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login4');}}/>
    </View>
        // add "I accept"/"Get started" button
    );
};

export default LoginScreen5
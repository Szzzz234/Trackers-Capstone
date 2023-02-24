import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';

let styles = StyleSheet.styles;

// Third Login Screen: Welcome message with general information about our app and mission
const LoginScreen3 = () => {
    return (
        <Text>
            Hi there!
            Welcome to our app, BACtracker! This is a tool  for young adults to explore and educate themselves about drinking alcohol.
            Our mission is to increase knowledge and understanding of safe alcohol consumption practices so you can be as informed as possible!
        </Text>
        // add Next button
        // add progress bar (circles) at bottom of screen -> not MVP
    );
};

export default LoginScreen3
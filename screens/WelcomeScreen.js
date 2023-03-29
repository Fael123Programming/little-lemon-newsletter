import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../utils/Colors';

function WelcomeScreen({navigation}) {
    return (
        <View
            style={welcomeStyle.container}
        >   
            <View style={welcomeStyle.imageContainer}>
                <Text style={welcomeStyle.imageTitle}>
                    LITTLE
                </Text>
                <Image
                    resizeMode={'contain'}
                    source={require('../img/logo.png')}
                    style={welcomeStyle.image}
                />
                <Text style={welcomeStyle.imageTitle}>
                    LEMON
                </Text>
            </View>
            <View style={welcomeStyle.effectPhraseContainer}>
                <Text style={welcomeStyle.effectPhrase}>
                    Little Lemon, your local{'\n'}Mediterranean Bistro
                </Text>
            </View>
            <View style={welcomeStyle.buttonContainer}>
                <CustomButton 
                    text={'Newsletter'}
                    onPress={() => navigation.navigate('Subscribe')}
                />
            </View>
        </View>
    );
}

const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteLight
    },
    imageContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: 130,
        height: 170,
    },
    imageTitle: {
        fontSize: 26,
        color: Colors.greenLight,
        letterSpacing: 4,
        fontFamily: 'serif',
        fontWeight: 'bold' 
    },
    effectPhrase: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    effectPhraseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;

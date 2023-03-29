import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    TextInput
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../utils/Colors';

function SubscribeScreen() {
    const [email, setEmail] = useState('');
    return (
        <View style={subscribeStyle.container}>
            <View style={subscribeStyle.imageContainer}>
                <Image
                    source={require('../img/logo.png')}
                    resizeMode={'stretch'}
                    style={subscribeStyle.image}
                />
            </View>
            <View style={subscribeStyle.effectPhraseContainer}>
                <Text style={subscribeStyle.effectPhrase}>
                    Subscribe to our newsletter for our{'\n'}latest delicious recipes!
                </Text>
            </View>
            <View 
                style={subscribeStyle.inputContainer}
            >  
                <TextInput
                    style={subscribeStyle.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder={'Type your email'}
                    keyboardType={'email-address'}
                />
            </View>
            <View style={subscribeStyle.buttonContainer}>
                <CustomButton
                    text={'Subscribe'}
                    deactivate
                />
            </View>
        </View>
    );
}

const subscribeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteLight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 120,
    },
    effectPhrase: {
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center'
    },
    effectPhraseContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 340,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: Colors.black,
        borderRadius: 8,
        backgroundColor: Colors.white,
        color: Colors.black,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SubscribeScreen;

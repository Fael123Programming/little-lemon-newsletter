import React, { useState } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../utils/Colors';
import validateEmail  from '../utils/ValidateEmail';

function SubscribeScreen() {
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(true);
    return (
        <KeyboardAvoidingView 
            style={subscribeStyle.container}
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView
                keyboardDismissMode={'on-drag'}
                contentContainerStyle={subscribeStyle.innerContainer}
            >
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
                        onChangeText={(newEmail) => {
                                setEmail(newEmail);
                                setDisabled(!validateEmail(newEmail));
                            }
                        }
                        placeholder={'Type your email'}
                        keyboardType={'email-address'}
                    />
                </View>
                <View style={subscribeStyle.buttonContainer}>
                    <CustomButton
                        text={'Subscribe'}
                        disabled={disabled}
                        onPress={() => {
                                Alert.alert('Thanks for subscribing, stay tuned!');
                                setEmail('');
                                setDisabled(true);
                            }
                        }
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const subscribeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteLight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 2,
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
        flex: 1,
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
        backgroundColor: Colors.whiteLight,
        color: Colors.black
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default SubscribeScreen;

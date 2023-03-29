import React from 'react';
import { 
    Text, 
    Pressable, 
    StyleSheet
} from 'react-native';
import Colors from '../utils/Colors';


function CustomButton({onPress, text}) {
    return (
        <Pressable
            onPress={onPress}
            style={buttonStyle.button}
        >
            <Text style={buttonStyle.text}>{text}</Text>
        </Pressable>
    );
}

const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: Colors.green,
        borderWidth: 1,
        borderColors: Colors.black,
        width: 340,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 21,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: Colors.white
    }
});

export default CustomButton;

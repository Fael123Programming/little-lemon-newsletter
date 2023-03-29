import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Stack = createStackNavigator();

const RootNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName={'Welcome'}
            screenOptions={{headerTitleAlign: 'center'}}
        >
            <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
            <Stack.Screen name={'Subscribe'} component={SubscribeScreen} />
        </Stack.Navigator>
    </NavigationContainer>    
);

export default RootNavigator;

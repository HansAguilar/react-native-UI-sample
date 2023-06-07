import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonInfo from '../components/RegisterScreens/PersonInfo';
import AdditionalInfo from '../components/RegisterScreens/AdditionalInfo';
import GenderInfo from '../components/RegisterScreens/GenderInfo';
import AccountInfo from '../components/RegisterScreens/AccountInfo';
import PhoneInfo from '../components/RegisterScreens/PhoneInfo';

const Stack = createNativeStackNavigator();

const Register = () => {
    return (
        <Stack.Navigator initialRouteName='PersonalInfo' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PersonalInfo' component={PersonInfo} />
            <Stack.Screen name='AdditionalInfo' component={AdditionalInfo} />
            <Stack.Screen name='GenderInfo' component={GenderInfo} />
            <Stack.Screen name='AccountInfo' component={AccountInfo} />
            <Stack.Screen name='PhoneInfo' component={PhoneInfo} />
        </Stack.Navigator>
    )
}

export default Register;
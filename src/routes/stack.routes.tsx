import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='ScreenA'
                component={ScreenA}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ScreenB'
                component={ScreenB}
            />
             <Stack.Screen
                name='ScreenC'
                component={ScreenC}
            />
        </Stack.Navigator>
    );
}
import React from 'react';
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
    const navigation = useNavigation();
    function openScreen() {
        navigation.navigate('ScreenB');
    }
    function openScreen2() {
        navigation.navigate('ScreenC');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Para onde deseja seguir?</Text>
            <Button
                title="Técnicos"
                onPress={openScreen}
                color='red'
            /> 
            <View style={styles.espaço}></View>
            <Button 
                title="Jogadores"
                onPress={openScreen2}
                color='red'
            />
        </View>
    );
}

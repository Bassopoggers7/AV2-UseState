import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function ScreenB() {

    const [name, setName] = useState('')
    const [idade, setIdade] = useState('')
    const [nac, setNac] = useState('')
    const [exp, setExp] = useState('')


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ficha Técnica</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do Técnico"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Idade"
                value={idade}
                onChangeText={setIdade}
            />

            <TextInput
                style={styles.input}
                placeholder="Nacionalidade"
                value={nac}
                onChangeText={setNac}
            />

            <TextInput
                style={styles.input}
                placeholder="Experiência"
                value={exp}
                onChangeText={setExp}
            />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxT}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.txt}>{name}</Text>
            <Text style={styles.txt}>{idade}</Text>
            <Text style={styles.txt}>{nac}</Text>
            <Text style={styles.txt}>{exp}</Text>

        </View>
    )
}
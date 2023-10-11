import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";

const dadosConsultas = [
    {
        id: 1,
        name: "Cristiano Ronaldo",
        position: "Forward",
        age: 36,
        image: "https://uploads.metropoles.com/wp-content/uploads/2022/12/15091252/GettyImages-963682404.jpg",
    },
    {
        id: 2,
        name: "Lionel Messi",
        position: "Attacking Midfielder",
        age: 34,
        image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/20/751662410-6491fad543043.jpeg",
    },
    {
        id: 3,
        name: "Neymar Jr.",
        position: "Forward",
        age: 29,
        image: "https://cdn.gazetasp.com.br/img/pc/920/610/dn_arquivo/2023/02/24fb9c5a-e999-4690-b5c5-bfd40e77af80.jpg",
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        position: "Forward",
        age: 23,
        image: "https://static01.nyt.com/images/2023/07/24/multimedia/24mbappe-saudis-4-qgmt/24mbappe-saudis-4-qgmt-superJumbo.jpg",
    },
    {
        id: 5,
        name: "Sergio Ramos",
        position: "Defender",
        age: 35,
        image: "https://cdn.espn.com.br/image/wide/622_05b6a50e-175d-3145-b0ef-b12af41f0299.jpg",
    },
    {
        id: 6,
        name: "Kevin De Bruyne",
        position: "Midfielder",
        age: 30,
        image: "https://images2.alphacoders.com/126/thumb-1920-1265455.jpg",
    },
    {
        id: 7,
        name: "Robert Lewandowski",
        position: "Forward",
        age: 32,
        image: "https://tntsports.com.br/__export/1657988258519/sites/esporteinterativo/img/2022/07/16/lewandowski_comemorando_gol.jpg",
    },
    {
        id: 8,
        name: "Virgil van Dijk",
        position: "Defender",
        age: 30,
        image: "https://f.i.uol.com.br/fotografia/2019/09/22/15691911005d87f4bcba2c9_1569191100_3x2_xl.jpg",
    },
    {
        id: 9,
        name: "Luka Modric",
        position: "Midfielder",
        age: 35,
        image: "https://tntsports.com.br/__export/1679683048354/sites/esporteinterativo/img/2023/02/20/luka_modric_-_real_madrid_-_gettyimages-1423953610.jpg_423682103.jpg",
    },
    {
        id: 10,
        name: "Erling Haaland",
        position: "Forward",
        age: 21,
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt80ef6faf06c2d713/60dad80da7307e39e4dba6e0/a96f23cad46cd9ff5d7fde8d737714e1f032dfd6.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    },
];


export function ScreenC() {
    const [consultaSelecionada, setConsultaSelecionada] = useState(null);

    const renderItem = ({ item }) => (
        <View style={styles.item}>

        <Text style={styles.itemText}>Nome: {item.name}</Text>

        <TouchableOpacity style={styles.btn} onPress={() => handleVisualizar(item)}>
            <Text style={styles.btnTxT}>
                {consultaSelecionada === item.id ? 'Ocultar' : 'Visualizar'}
            </Text>
        </TouchableOpacity>

        {consultaSelecionada === item.id && (
            <View style={styles.detalhesJogador}>
                <Text>Posição: {item.position}</Text>
                <Text>Idade: {item.age}</Text>
                <Image
            style={styles.image}
            source={{ uri: item.image }}
        />
            </View>
        )}
    </View>
);

    function handleVisualizar(item) {
        if (consultaSelecionada === item.id) {
            setConsultaSelecionada(null);
        } else {
            setConsultaSelecionada(item.id);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dados dos Jogadores</Text>
            <FlatList
                data={dadosConsultas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                
            />
        </View>
    );
}

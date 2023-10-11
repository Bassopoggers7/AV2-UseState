import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    input: {
        color: '#000',
        backgroundColor: "#fff",
        borderRadius: 5,
        fontWeight: "200",
        width: '60%',
        margin: 10,
        padding: 10,

    },

    btn: {
        backgroundColor: "#000",
        fontSize: 20,
        width: '60%',
        margin: 10,
        padding: 20,
        marginBottom: 5,
        alignItems: 'center',
        borderRadius: 6,
    },

    btnTxT: {
        color: "#fff",
        fontFamily: "Arial",
        fontWeight: "600",
    },
    txt: {
        fontSize: 14,
        color: "black"
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    detalhesJogador: {
        backgroundColor: '#E0E0E0',
        padding: 16,
        marginTop: 10,
    },
    image: {
        width: 50, 
        height: 50, 
        resizeMode: 'cover',
    },
    espaço: {
        height: 20
    }
});
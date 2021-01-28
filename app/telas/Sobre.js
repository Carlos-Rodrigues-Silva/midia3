import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Constants from 'expo-constants';
import Cabecalho from '../shared/Cabecalho';

function Sobre(props) {
    return (
        <Fragment>
            <Cabecalho/>
            <View style={styles.container}>
                <Text style={styles.texto}> Nome: {Constants.manifest.name}</Text>
                <Text style={styles.texto}> Versão: {Constants.manifest.version}</Text>
                <Text style={styles.texto}> Autor: Carlos Rodrigues</Text>
                <Text style={styles.texto}> Sobre: Aplicativo para cadastros de pedidos</Text>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    texto:{
        fontSize: 17
        
    }
});

export default Sobre;


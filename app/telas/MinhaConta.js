import React, { Fragment } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';
import Cabecalho from '../shared/Cabecalho';

export default function MinhaConta(props) {
    return (
        <Fragment>
            <Cabecalho/>
            <View style={styles.container}>
                <Text style={styles.texto} >Cadastrar Pedidos</Text>
                <TextInput placeholder={'Número Pedido'} style={styles.formulario}></TextInput>
                <TextInput placeholder={'Data'}  style={styles.formulario}></TextInput>
                <TextInput placeholder={'Valor Total'} style={styles.formulario}></TextInput>
                <TextInput placeholder={'Quantidade'} style={styles.formulario}></TextInput>
                <Button style={styles.botao} color="green" title="Cadastar"/>
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

    formulario: {
        height: 40, 
        width: 300,
        borderColor:'dodgerblue',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 15
    },
    texto: {
        fontSize: 17
    },

    botao: {
        marginTop: 20
    }

});
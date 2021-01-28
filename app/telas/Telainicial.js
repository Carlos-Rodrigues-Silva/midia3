import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial(props) {

    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Meus Pedidos');
    }, 5000);

    return (
       <ImageBackground 
            style={styles.background}
            source={require('../assets/carregando.jpg')}>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

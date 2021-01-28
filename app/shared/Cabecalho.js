import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function Cabecalho() {

    const navigation = useNavigation();

    return (
        <View>
            <Header style={styles.header}>
                <Left>
                    <Icon style={styles.icon} name="menu" onPress={() => navigation.openDrawer()}/>
                </Left>
            </Header>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: 'dodgerblue',
    },
    icon:{
        marginLeft: -100
    },
});

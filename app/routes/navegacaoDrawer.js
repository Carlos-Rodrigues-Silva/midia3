import React, { Fragment } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MinhaConta from '../telas/MinhaConta';
import MeusPedidos from '../telas/MeusPedidos';
import Sobre from '../telas/Sobre';
import TelaInicial from '../telas/Telainicial';

const Drawer = createDrawerNavigator();

function navegacaoDrawer(props) {
    return (
        <Fragment>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="TelaInicial" component={TelaInicial}>
                <Drawer.Screen name="Meus Pedidos" component={MeusPedidos} />
                <Drawer.Screen name="Minha Conta" component={MinhaConta} />
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="TelaInicial" component={TelaInicial} options={{title: ""}} />
                </Drawer.Navigator>
             </NavigationContainer>
        </Fragment>
        
    );
}

export default navegacaoDrawer;
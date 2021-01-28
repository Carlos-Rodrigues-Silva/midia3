import React, {Fragment, useState} from 'react';
import { SafeAreaView, StyleSheet, View, Button} from 'react-native';
import { Table, Row, Rows} from 'react-native-table-component'
import Cabecalho from '../shared/Cabecalho';

export default function MeusPedidos (props) {

  const [tabela, setTabela] = useState(['#', 'Data', 'Valor Total', 'Quantidade']);

  const [dadosTabela, setDadosTabela] = useState([
        ['0001', '24/01/2021', '699,00','1'],
        ['0002', '01/01/2021', '599,00','5'],
        ['0003', '02/01/2021', '499,00','1'],
        ['0004', '03/01/2021', '399,00','2']
  ]);

  return (
    <Fragment>
        <Cabecalho/>
        <View style={styles.container}>
            <Table style={styles.border}>
                <Row style={styles.head} textStyle={styles.text} data={tabela}/>
                {dadosTabela.map((dados, index) => (
                    <Row key={index} 
                    style={styles.dataRow} 
                    textStyle={styles.text} 
                    data={dados}/>
                ))}
            </Table>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1
    },
    border: {
      borderWidth: 0.5,
      borderColor: 'white'
    },
    head: {
      height: 40,
      backgroundColor: 'dodgerblue'
    },
    text: {
        textAlign: 'center',
        fontSize: 17
    },
    dataRow: {
      height: 50
    },
});

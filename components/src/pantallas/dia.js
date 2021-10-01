import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
  Pressable,
  
} from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';
import PagerView from 'react-native-pager-view';
import { DataTable, Button } from 'react-native-paper';
import Navigation from '../navigation/navigation';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getUsuarios} from '../Conexion/Backend';

 

export default function Dia(props) {
  

  
  const { fecha } = props;
  const navigation = useNavigation();

  const [modalvisibleplaya, setModalVisibleplaya] = useState(false);

  const dia = fecha.getDate();




  const nombreDelDiaSegunFecha = (date) =>
    ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][
      new Date(date).getDay()
    ];

  const nombreDelMes = (date) =>
    [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ][new Date(date).getMonth()];

  getlist = async () => {
      getUsuarios()
    }



  return (
    
    <ScrollView key="0">
   
      <Image
        style={styles.banner}
        source={{
          uri:
            'https://www.barbershops.nl/sites/default/files/cutthroat_001.jpg',
        }}
      />
      <Text style={styles.TextCente}>
        {' '}
        {nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha)}{' '} 
      </Text>
      
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Hora</DataTable.Title>
          <DataTable.Title>Acciones</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>8 am</DataTable.Cell>
          <DataTable.Cell numeric>
       
 <Button
              style={{ fontSize: 10 }}
              icon=""
              mode="contained"
              onPress={() => {
            
       
     

  navigation.navigate('Formulario', {
                    hora: "8 am",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
          
          
                  });
                
       
        
        
                       
                
                }}>
              Reservar
            </Button>
         
           
          </DataTable.Cell>

        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>9 am</DataTable.Cell>
          <DataTable.Cell numeric>
            <Button
              style={{ fontSize: 10 }}
              icon=""
              mode="contained"
                onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "9 am",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
              Reservar
            </Button>
          </DataTable.Cell>

          
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>10 am</DataTable.Cell>
          <DataTable.Cell numeric>
            <Button
              style={{ fontSize: 10 }}
              icon=""
              mode="contained"
                 onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "10 am",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
              Reservar
            </Button>
          </DataTable.Cell>

       
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>11 am</DataTable.Cell>
          <DataTable.Cell numeric>
            <Button
              style={{ fontSize: 10 }}
              icon=""
              mode="contained"
                 onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "11 am",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
              Reservar
            </Button>
          </DataTable.Cell>

          
        </DataTable.Row>

        <Text style={styles.TextCente}>Tarde</Text>

        <DataTable.Row>
          <DataTable.Cell>1 pm</DataTable.Cell>
          <DataTable.Cell numeric>
            <Button
              style={{ fontSize: 10 }}
              icon=""
              mode="contained"
                onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "1 pm",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
              Reservar
            </Button>
          </DataTable.Cell>

         
        </DataTable.Row>
      </DataTable>

      <DataTable.Row>
        <DataTable.Cell>2 pm</DataTable.Cell>
        <DataTable.Cell numeric>
          <Button
            style={{ fontSize: 10 }}
            icon=""
            mode="contained"
              onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "2 pm",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
            Reservar
          </Button>
        </DataTable.Cell>

        
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>3 pm</DataTable.Cell>
        <DataTable.Cell numeric>
          <Button
            style={{ fontSize: 10 }}
            icon=""
            mode="contained"
               onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "3 pm",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
            Reservar
          </Button>
        </DataTable.Cell>

       
      </DataTable.Row>

      <DataTable.Row style={styles.tabla}>
        <DataTable.Cell>4 pm</DataTable.Cell>
        <DataTable.Cell numeric>
          <Button
            style={{ fontSize: 10 }}
            icon=""
            mode="contained"
               onPress={() => {
                  navigation.navigate('Formulario', {
                    hora: "4 pm",
                    day:
        nombreDelDiaSegunFecha(fecha) +
          ' ' +
          dia +
          ' de ' +
          nombreDelMes(fecha),
                  });
                }}>
            Reservar
          </Button>
        </DataTable.Cell>

  
      </DataTable.Row>
    </ScrollView>
  );
     
}

const styles = StyleSheet.create({
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'flex-start',
  },

  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  TextCente: {
    textAlign: 'center',
    fontSize: 25,
    margin: 15,
  },
  tabla: {
    marginBottom: 25,
  },
  banner: {
    height: 250,
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  cajita: {
    height: 45,
  },
  cajita2: {
    height: 45,
  },
  cajita3: {
    height: 45,
  },
  cajita4: {
    height: 45,
  },
});

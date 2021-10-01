import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';


export default function Credenciales(props) {
  const { navigation } = props;

  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <View style={styles.cajita}>
          <Text style={styles.titulo}>Barber SV</Text>
          <Image style={styles.img} source={require('../img/logo.png')} />
        </View>
        <View style={styles.cajita2}>
          <Text style={styles.subtitulo}>
            PATRICK ERNESTO ROSALES MENDOZA -- RM181976
          </Text>
          <Text style={styles.subtitulo}>
            AXEL GIOVANNI RAMIREZ ALFARO -- RA160395
          </Text>
        </View>
        <View style={styles.cajita3}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
  },
  img: {
    width: 150,
    height: 150,
  },
  titulo: {
    margin:15,
    fontSize: 25,
    color: 'black',fontWeight:'bold',
  },
  subtitulo: {
    margin:15,
    flex:1,
    fontSize: 13,
    color: 'black',
    fontWeight:'bold',
  },
  cajita: {
    height: 230,
    alignItems: 'center',
  },
  cajita2: {
    height: 100,
    alignItems: 'center',
  },
  cajita3: {
    height: 100,
    alignItems: 'center',
  },
});
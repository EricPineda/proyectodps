import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';


export default function Inicio(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.pagerView}>
      <StatusBar barStyle="light-content" backgroundColor="#434371" />
        <ScrollView>
        <View style={styles.contenedor}>
        <View style={styles.cajita}>
        
          <Text style={styles.titulo}>BarberSV</Text>
          <Image
            source={require('../img/logo.png')}
            style={styles.logo}
          />

          </View>

        <View style={styles.cajita2}>
          <Text style={styles.titulo2}>Misión</Text>
          <Text style={styles.titulo_sub}>Brindar un servicio de alta calidad que satisfaga las necesidades y exigencias de cada cliente. Contar con un personal profesional, calificado y responsable para que nuestra clientela experimente la sensación de  estar en un ambiente familiar y desee regresar a nuestra barberia.</Text>
 <Image
            source={{
              uri:
                'https://www.flowww.net/hubfs/Q3_Campa%C3%B1as%20Septiembre_2018/Septiembre%20Q3%202018/BLOG_ES/5-iideas-para-decorar-tu-barberia-flowww.png',
            }}
            style={styles.img2}
          />
          </View>
          
        <View style={styles.cajita3}>
  <Text style={styles.titulo2}>Visión</Text>
          <Text style={styles.titulo_sub}>Ser la barberia número #1 del municipio de San Vicente comprometiendonos con nuestros clientes y ofrecer servicios con los mejores estándares de calidad donde superemos cualquier expectativa innovando dia a dia para su máxima satisfacción.</Text>
<Image
            source={{
              uri:
                'https://eltornilloquetefalta.files.wordpress.com/2011/03/023.jpg',
            }}
            style={styles.img2}
          />
<Text style={styles.titulo}>¡Te Esperamos en BarberSV!</Text>
</View>
        </View>
        </ScrollView>
        
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  cajita: {
    height: 280,
    alignItems: 'center',
  },
  cajita2: {
    height: 470,
    alignItems: 'center',
  },
  cajita3: {
    height: 530,
    alignItems: 'center',
  },
   contenedor: {
    flex: 1,
    flexDirection: 'column',
  },
  logo:{
      height: 250,
    width: 250,
  },
  img2: {
    height: 250,
    width: 450,
  },
  titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginTop: 15,
  textAlign: 'justify',
  fontFamily: 'Redressed-Regular',
},

  titulo2:{
  fontWeight:'bold',
  fontSize:24,
  marginTop: 35,
  textAlign: 'justify',
  fontFamily: 'Redressed-Regular',
},
titulo_sub:{
  fontWeight:'bold',
  fontSize:14,
  margin: 20,
  textAlign: 'justify',
  fontFamily: 'Redressed-Regular',
},

});

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
export default function Establecimiento(props) {
  const { navigation } = props;

  return (
    <ScrollView>
      <View style={styles.contenido}>
      <View style={styles.cajita2}>
        <Image
          style={styles.banner}
          source={{ uri: 'https://www.beautymarket.es/imagen/min17088.jpg' }}
        />

        <Text style={styles.titulo}>Barber SV</Text>
        </View>
<View style={styles.cajita3}>
        <Button
          icon="map"
          mode="contained"
          style={styles.boton}
          onPress={() =>
            navigation.navigate('web', {
              url:
                'https://www.google.com.sv/maps/place/Jaimes+Barbershop/@13.7174508,-88.8562161,19z/data=!4m5!3m4!1s0x8f63577bd760d221:0xc0ca83f0329b96d3!8m2!3d13.7175113!4d-88.8563955?hl=es-419',
            })
          }>
          Google Maps
        </Button>



    <Button
          icon="login"
          mode="contained"
          style={styles.boton}
          onPress={() =>
            navigation.navigate('Login')}>
          Login
        </Button>
        
       <Text style={styles.paragraph}>
   <Text style={{fontWeight: "bold"}}>Nota:</Text><Text>EL login solo esta disponible para personas autorizadas.  </Text>
 </Text>
        </View>

  

        
     
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cajita2: {
    height: 305,
    alignItems: 'center',
  },
  cajita3: {
    height: 330,
    alignItems: 'center'
  },
   contenido: {
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    height: 250,
    width: 450,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
  },
  boton:{
    margin: 15,
  },
  paragraph: {textAlign:"center"},
});

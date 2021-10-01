import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';
import { DataTable, Button } from 'react-native-paper';
import { postUsuario } from '../Conexion/Backend';

export default class Formulario extends Component {
 constructor(props) {
    super(props);
    this.state = {time: this.props.route.params.hora,
    dia: this.props.route.params.day,

  nombre: '',
  apellido: '',
  apodo: ''
    };

  }


render(){



  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <View style={styles.cajita}>
          <TextInput
            onChangeText={(value) => {this.state.nombre = value}}
            placeholder="Nombres"
            keyboardType="username"
            style={styles.input}
          />
        </View>
        <View style={styles.cajita2}>
          <TextInput
            onChangeText={(value) => {this.state.apellido = value}}
            placeholder="Apellidos"
            keyboardType="username"
            style={styles.input}
          />
        </View>
        <View style={styles.cajita3}>
          <TextInput
          onChangeText={(value) => this.state.apodo = value}
            placeholder="Apodo"
            keyboardType="username"
            style={styles.input}
          />
        </View>

             <View style={styles.cajita3}>
          <TextInput
          onChangeText={(value) => this.state.dia = value}
            placeholder="Día"
            keyboardType="username"
            style={styles.input}
            editable={false}
            value={this.state.dia}
          />
        </View>


             <View style={styles.cajita3}>
          <TextInput
          onChangeText={(value) => this.state.time = value}
            placeholder="Hora"
            keyboardType="username"
            style={styles.input}
            editable={false}
            value={this.state.time}
          />
        </View>
        <View style={styles.cajita}>
          <Button
            style={{ fontSize: 10, marginTop: 15 }}
            icon=""
            mode="contained"
            onPress={() => {
               if(this.state.nombre === ''){
                 alert("por favor no deje campos vacíos")
                }else if(this.state.apellido === ''){
                  alert("introduce tu apellido")
                }else if(this.state.apodo === ''){
                  alert("introduce tu apodo")
                }else{

                
              postUsuario(
               
              this.state.nombre,
              this.state.apellido,
              this.state.apodo,
              this.state.dia,
              this.state.time
              
              );
           alert("guardado existosamente",this.props.navigation.navigate('Calendario'),
           
           )
                }   
         
            }}>
            Guardar Datos
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
  },
  cajita: {
    height: 80,
    alignItems: 'center',
  },
  cajita2: {
    height: 80,
    alignItems: 'center',
  },
  cajita3: {
    height: 80,
    alignItems: 'center',
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    width: '60%',
    marginTop: 15,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
});

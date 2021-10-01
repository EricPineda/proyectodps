import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../Conexion/database';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
      id: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      id: firebase.auth().currentUser.email
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hola, {this.state.id}
        </Text>
<View style={styles.cajita3}>
  <Button
        style={styles.boton}
          color="#6a51ae"
          title="Ver Reservaciones"
          onPress={() =>  this.props.navigation.navigate('Reservaciones')}
        />
<Text></Text>
        <Button
        style={styles.boton}
          color="#6a51ae"
          title="Cerrar Sesión"
          onPress={() => this.signOut()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
  boton:{
    margin:15
  },
  cajita3:{
    height: 330,
    alignItems: 'center'
  }
});
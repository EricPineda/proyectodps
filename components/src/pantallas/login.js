import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  ScrollView,
  Image,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import firebase from '../Conexion/database';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('Por favor no deje campos vacios!');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log('Usuario logeado correctamente!');
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          this.props.navigation.navigate('Dashboard');
        })
        .catch((error) => alert(error)
        
        )
    }
  };

  render() {
  
    return (
      <ScrollView>
      <View style={styles.contenido}>
    <Image
          style={styles.banner}
          source={{ uri: 'https://www.flipaste.com.ar/experiencias/e?id=4969&alto=330' }}
        />
        <View style={styles.cajita3}>
        <Input
          placeholder="Email"
          label="Ingresa tu email"
          leftIcon={<Icon name="user" size={24} color="black" />}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Input
          placeholder="Password"
          label="Ingresa tu contraseña"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
        />

        <Button
          color="#6a51ae"
          title="Iniciar Sesion"
          onPress={() => this.userLogin()}
        />
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   contenido: {
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    height: 250,
    width: 450,
  },
   cajita3: {
    height: 330,
    alignItems: 'center',
    margin:15,
    padding:15
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

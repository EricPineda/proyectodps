
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Image
  
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Button } from 'react-native-paper';
import firebase from '../Conexion/conexionfirestore';
import Icon from 'react-native-vector-icons';
class Reservaciones extends Component {
  constructor() {
    super();
 
  this.firestoreRef = firebase.firestore().collection('reservaciones');
    this.state = {
      isLoading: true,
      reserArr: [],
      clientsArr: [],
      allArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const reserArr = [];
    const clientsArr = [];
    const allArr = [];
    querySnapshot.forEach((res) => {
      const { nombres,apodo,apellidos,fecha,hora } = res.data();
  
        allArr.push({
          key: res.id,
          res,
          nombres,
          apodo,
          apellidos,
          fecha,
          hora,
        });
        console.log(allArr);
      
    });
    this.setState({
      reserArr, clientsArr,allArr,
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={{ backgroundColor:'white' }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
       <Text style={{fontSize:30, marginLeft: 10,textAlign:"center" }} >Reservaciones</Text>
      <ScrollView style={{marginLeft: -10 }}  >
       
        {this.state.allArr.map((item, i) => {
          return (
            console.log(item.nombres),
            (
              <ListItem
              
                key={i}
                chevron
                onPress={() => {
                  this.props.navigation.navigate('', {
                    userkey: item.key,
                  });
                }}>
                <ListItem.Content >
                        <Avatar source={{uri: "https://img2.freepng.es/20180421/kaq/kisspng-beard-man-clip-art-barbershop-5adbf230dc0706.1783740215243638249012.jpg"}} />

                   <ListItem.Title>{item.nombres} {item.apellidos}</ListItem.Title>
                     <ListItem.Subtitle>{item.fecha}</ListItem.Subtitle>
                      <ListItem.Subtitle>{item.hora}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="white" />
              </ListItem>
            )
          );
        })}

        
      </ScrollView>   
         <Button
          icon="table-search"
          mode="contained"
          style={styles.boton}
          onPress={() =>
            this.props.navigation.navigate('Filtros')}>
          Filtrar Reservaciones
        </Button>   
        </View>

   
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
  },
  
   banner: {
    height: 250,
    flex: 1,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
   boton:{
    margin: 15,
  }
});

export default Reservaciones;
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  Item,
} from 'react-native';
import { ListItem, Avatar, Input } from 'react-native-elements';
import firebase from '../Conexion/conexionfirestore';
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  Feather,
} from '@expo/vector-icons';

class Filter extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('reservaciones');
    this.state = {
      isLoading: true,
      allArr: [],
      filteredRecipes: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const allArr = [];

    querySnapshot.forEach((res) => {
      const { nombres, apodo, apellidos,fecha,hora } = res.data();

      allArr.push({
        key: res.id,
        res,
       nombres,
          apodo,
          apellidos,
          fecha,
          hora,
      });
    });
    this.setState({
      allArr,
      isLoading: false,
    });
  };
  SearchFilterRecipes(textToSearch) {
    console.log(textToSearch);
    this.setState({
      filteredRecipes: this.state.allArr.filter(
        (i) =>
          i.fecha.toLowerCase().includes(textToSearch.toLowerCase()) ||
          i.nombres.toLowerCase().includes(textToSearch.toLowerCase())
      ),
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView>
        <ScrollView style={styles.container}>
          <View style={styles.searchSection}>
            <Feather
              style={styles.searchIcon}
              name="search"
              size={24}
              color="black"
            />
            <Input
              style={styles.input}
              onChangeText={(text) => {
                this.SearchFilterRecipes(text);
              }}
              placeholder={'Search'}
            />
          </View>

          {this.state.filteredRecipes.map((item, i) => {
            return (
              <ListItem
                bottomDivider
                key={i}
                chevron
                onPress={() => {
                  this.props.navigation.navigate('', {
                    userkey: item.key,
                  });
                }}>
                <ListItem.Content>
               
                     <Avatar source={{uri: "https://img2.freepng.es/20180421/kaq/kisspng-beard-man-clip-art-barbershop-5adbf230dc0706.1783740215243638249012.jpg"}} />

                   <ListItem.Title>{item.nombres} {item.apellidos}</ListItem.Title>
                     <ListItem.Subtitle>{item.fecha}</ListItem.Subtitle>
                      <ListItem.Subtitle>{item.hora}</ListItem.Subtitle>
               
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  input: {
    marginTop: 20,
  },
  searchIcon: {
    marginLeft: 30,
  },
  container: {
    flex: 1,
    paddingBottom: 22,
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
});

export default Filter;

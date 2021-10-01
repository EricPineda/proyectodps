import React from 'react';
import CalendarioStack from './calendarioStack';
import CredencialesStack from './credencialesStack';
import EstablecimientoStack from './establecimientoStack';
import InicioStack from './inicioStack';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#6A5ACD' }}>

<Tab.Screen
        name="Inicio"
        component={InicioStack}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
            
          ),
        }}
      />

      
      <Tab.Screen
        name="Calendario"
        component={CalendarioStack}
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="establecimiento"
        component={EstablecimientoStack}
        options={{
          title: 'Local',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-city" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="credenciales"
        component={CredencialesStack}
        options={{
          title: 'Credenciales',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" size={24} color={color}  />
          ), 
        }}
      />
    </Tab.Navigator>
  );
}

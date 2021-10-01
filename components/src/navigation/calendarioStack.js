import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Calendario from '../pantallas/calendario';
import Formulario from '../pantallas/formulario'

import { View, Button,Text } from 'react-native';

const Stack = createStackNavigator();


export default function CalendarioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{ title: 'Calendario',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}
      />
       <Stack.Screen name="Formulario" component={Formulario} options={{ title: 'Agendar cita',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}/>
    </Stack.Navigator>
  );
}

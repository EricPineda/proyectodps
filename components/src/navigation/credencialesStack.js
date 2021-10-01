import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Credenciales from '../pantallas/credenciales';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
const Stack = createStackNavigator();
export default function CredencialesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="credenciales"
        component={Credenciales}
        options={{ title: 'Credenciales',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}
      />
    </Stack.Navigator>
  );
}

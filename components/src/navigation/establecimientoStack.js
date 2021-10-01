import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Establecimiento from '../pantallas/establecimiento';
import WebScreen from '../pantallas/WebScreen';
import Login from '../pantallas/login';
import Dashboard from '../pantallas/dashboard';
import Reservaciones from '../pantallas/Reservaciones';
import Filter from '../pantallas/filter';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
const Stack = createStackNavigator();
export default function EstablecimientoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="establecimiento"
        component={Establecimiento}
      options={{ title: 'Establecimiento',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}
      />
      <Stack.Screen
          name="web"
          component={WebScreen}
          options={{ title: 'Ubicacion',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}
        />
        <Stack.Screen 
        name="Login" 
        component={Login} 
         options={{ title: 'Login',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={{ title: 'Login',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff'  } }
         
       
      />
       <Stack.Screen 
       name="Reservaciones" 
       component={Reservaciones} 
       options={{ title: 'Reservaciones',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff'  } }
         
       
      />

           <Stack.Screen 
       name="Filtros" 
       component={Filter} 
       options={{ title: 'Reservaciones',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff'  } }
         
       
      />
    </Stack.Navigator>
  );
}

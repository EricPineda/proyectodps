  import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/src/navigation/navigation';
import { firebase } from '@firebase/app';
import '@firebase/firestore';

export default function App() {
  
  if (firebase.apps.length === 0) {
    const firebaseConfig = {
      apiKey: 'AIzaSyBoQocxQIMIr7OYq-R6stCctNKKapno6xc',
      authDomain: 'barbersv-b8fac.firebaseapp.com',
      projectId: 'barbersv-b8fac',
      storageBucket: 'barbersv-b8fac.appspot.com',
      messagingSenderId: '589552068551',
      appId: '1:589552068551:web:3b9ebdf7abe5764fb9dbe2',
      measurementId: 'G-7LN58T7M8K',
    };

    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

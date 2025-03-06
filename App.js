import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Ahorro from './components/Ahorro';  
import Perfil from './components/Perfil';  
import Configuracion from './components/Configuracion';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ahorro" component={Ahorro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuracion" component={Configuracion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
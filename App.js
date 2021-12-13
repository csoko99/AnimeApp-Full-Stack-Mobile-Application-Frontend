import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anime from './Anime';
import Kereso from './Kereso'

function Animeklap({ navigation }) {
  return (
    <Anime/>
  );
}

function Kereseslap({ navigation }) {
  return (
    <Kereso/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Animék" component={Animeklap} />
        <Drawer.Screen name="Keresés" component={Kereseslap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

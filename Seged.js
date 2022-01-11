import React, { Component } from 'react';
import { Button, StyleSheet, View , Text, Image, } from 'react-native';

export default class Seged extends React.Component {
render(){
return(
  <View >
  
  <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Név: {nev} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Megjelenés: {datum.split('T')[0].trim()} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Műfaj: {mufaj} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Évadok száma: {evad} db </Text>
          <Text> </Text>
  </View>
    );


  }
}
 
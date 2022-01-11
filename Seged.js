import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';

export default class Touchables extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://192.168.7.102:3000/animek')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <Image  source={{uri:'http://192.168.7.102:3000/'+this.props.route.params.aktsorszam+'.jpg'}}   style={{ width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} /> 
        <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Név: {this.props.route.params.aktnev} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Megjelenés: {this.props.route.params.aktdatum.split('T')[0].trim()} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Műfaj: {this.props.route.params.aktmufaj} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Évadok száma: {this.props.route.params.aktevad} db </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});
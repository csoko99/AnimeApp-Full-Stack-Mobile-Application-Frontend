import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image, ScrollView } from 'react-native';

export default class Touchables extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://192.168.1.104:3000/animek')
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
        <Image  source={{uri:'http://192.168.1.104:3000/'+this.props.route.params.aktid+'.jpg'}}   style={{ width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} /> 
        
          <Text>Leírás:</Text>
          <ScrollView  contentContainerStyle={styles.leiras}>
             <Text style={{color:"black",fontSize:20,textAlign:"center",marginBottom:5}}   >  {this.props.route.params.aktleiras}  </Text>
             <Text></Text>
          </ScrollView>
          <Text></Text>
      </View>
       
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginHorizontal:10,
    alignItems: 'center'
  },
  leiras:{
    paddingVertical: 20
    
  }
  
});
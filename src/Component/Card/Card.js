import React from "react";
import { View,SafeAreaView,TouchableOpacity,Text, Alert } from "react-native";
import styles  from './Card.style';

const Card = ( props) => {

    const AlertMesaj = () => {
        Alert.alert("Uygulamama hoş geldiniz." + props.title);
    }

    return (
   <SafeAreaView style = {styles.container}>
  
       <View style = {styles.card_container}>  
  
        <View style={styles.card_body}> 
           <Text style = {styles.card_title}> {props.title} </Text>
           <Text style = {styles.card_text}> {props.text}</Text>
           </View>
  
           <TouchableOpacity style={styles.card_button_container} onPress={AlertMesaj}>
            <Text style= {styles.card_button_title}> Beğenme </Text>
           </TouchableOpacity>
       </View>
  
   </SafeAreaView>
    );
  
  }

  export default Card;
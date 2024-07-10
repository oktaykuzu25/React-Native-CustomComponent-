import { StyleSheet } from "react-native";


export default StyleSheet.create ({
    container : {
        flex :1,
        backgroundColor : '#e0e0e0',
    },
  
    card_container : {
       backgroundColor :'white',
       margin : 10,
       borderWidth :1,
       borderColor : 'gray',
       borderRadius : 10,
    },
    card_body : {
       padding : 10,
    },
    card_title : {
  
      fontSize: 15,
      fontWeight : 'bold',
      margin : 10,
  
    },
    card_text :{
       fontSize : 18,
       margin :10,
  
    },
    card_button_container : {
      backgroundColor : '#00C2FF',
      padding :10,
      alignItems : 'center',
      borderBottomLeftRadius : 10,
      borderBottomRightRadius : 10,
    },
    card_button_title :{
      fontWeight : 10,
      color : 'white',
      fontSize :17,
  
    }
  
}
)
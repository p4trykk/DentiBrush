import React from "react";
import {Button,StyleSheet,Text, View,Image, Pressable, ImageBackground} from "react-native";

export default function ScreenB(){
    return(
      // <View style={styles.container}>
      //    <Image  style={styles.image} source={require('./assets/logo1.png')}></Image>
      //      <MyjZeby
      //        onPressFunction={onPressHandler}
      //      />
      // </View>
      <View>
        <Text>
          Screen A
        </Text>
      </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#a8e9fa',
      alignItems: 'center',
      
    },
    taskWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle:{
      fontSize: 44,
      fontWeight: 'bold',
    },
    items: {
      //margin: 10,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 40,
      paddingRight:40,
    },
    image:{
      width:411,
      height:410,
    },
    /*image2:{
      width:90,
      height:90,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 50,
      marginTop: 1,
      marginLeft: 65,
  
    },
    startbutton:{
      width:230,
      height:230,
      backgroundColor:'#e224b8',
      borderRadius: 250/2,
      borderWidth: 5,
  
    },
    
    buttontext:{
      marginTop: 30,
      fontSize: 40,
      alignItems: 'center',
      justifyContent:'center',
      textAlign: 'center',
    }
    */
    
  }
)
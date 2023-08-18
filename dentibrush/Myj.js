import React from "react";
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';



const MyjZeby = (props)=>{
  return(
  <View>
    <Pressable 
      onPress={props.onPressFunction}
      //hitSlop={{top:10, bottom:10, right:10, left:10}
      //}
      android_ripple={{color: '#a8e9fa'}
      }
      style={({pressed})=> [
      {backgroundColor: pressed ? '#a8e9fa' : 'be82e8'}, styles.startbutton
      ]}
    >
      <Text style={styles.buttontext}>MYJ</Text>
      <Image  style={styles.image2} source={require('./assets/smile.png')} resizeMode='stretch'></Image>
    </Pressable>
  </View>
  )
}

const Ustawienia = (props2)=>{
  return(
  <View>
      <Pressable 
          onPress={props2.onPressFunction}
          hitSlop={{top:10, bottom:10, right:10, left:10}
          }
          android_ripple={{color: '#a8e9fa'}
          }
          style={({pressed})=> [
          {backgroundColor: pressed ? '#a8e9fa' : 'be82e8'}, styles.settingsbutton
          ]}
      >
          <Image  style={styles.imagesettings} source={require('./assets/settings.png')} resizeMode='stretch'></Image>
      </Pressable>
  </View>
  )
}
const Wroc = (props3)=>{
  return(
  <View style={styles.backimage}>
      <Pressable 
          onPress={props3.onPressFunction}
          hitSlop={{top:10, bottom:10, right:10, left:10}
          }
          android_ripple={{color: '#a8e9fa'}
          }
          style={({pressed})=> [
          {backgroundColor: pressed ? '#a8e9fa' : 'be82e8'}, styles.wracaniesbutton
          ]}
      >
          <Image  style={styles.imagesettings} source={require('./assets/back.png')} resizeMode='stretch'></Image>
      </Pressable>
  </View>
  )
}
const Wroc2 = (props5)=>{
  return(
  <View style={styles.closeimage}>
      <Pressable 
          onPress={props5.onPressFunction}
          hitSlop={{top:10, bottom:10, right:10, left:10}
          }
          android_ripple={{color: '#a8e9fa'}
          }
          style={({pressed})=> [
          {backgroundColor: pressed ? '#a8e9fa' : 'be82e8'}, styles.closebutton
          ]}
      >
          <Image  style={styles.imageclose} source={require('./assets/close.png')} resizeMode='stretch'></Image>
      </Pressable>
  </View>
  )
}

const Home = (props4)=>{
  return(
  <View style={styles.homeimage}>
      <Pressable 
          onPress={props4.onPressFunction}
          //onPress={(props4)=>{props4.navigation.goBack(null)}}
          hitSlop={{top:10, bottom:10, right:10, left:10}
          }
          android_ripple={{color: '#a8e9fa'}
          }
          style={({pressed})=> [
          {backgroundColor: pressed ? '#a8e9fa' : 'be82e8'}, styles.settingsbuttonHome
          ]}
      >
          <Image  style={styles.imagesettingsHome} source={require('./assets/home.png')} resizeMode='stretch'></Image>
      </Pressable>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#a8e9fa',
        alignItems: 'center',
        
      },
      buttontext:{
        marginTop: 30,
        fontSize: 40,
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        color: '#e224b8',
        fontFamily: 'HennyPenny-Regular',
      },
      image2:{
        width:90,
        height:90,
        marginTop: 1,
        marginLeft: 65,
    
      },
      backimage:{
        width:60,
        height:60,
        marginTop: -110,
        marginLeft: -140,
        marginBottom: 50,
      },
      closeimage:{
        width:20,
        height:20,
        marginTop: 10,
        marginLeft: 425,
        marginBottom: 0,

      },
      homeimage:{
        width:60,
        height:60,
        marginTop: 0,
        marginLeft: 190,
        marginBottom: 0,
      },
      imagesettings:{
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:8,
        marginTop: 8,
      },
      imagesettingsHome:{
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:8,
        marginTop: 0,
      },
      imageclose:{
        width:40,
        height:40,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:8,
        marginTop: 8,
      },
      startbutton:{
        width:231,
        height:231,
        backgroundColor:'#a8e9fa',
        borderRadius: 250/2,
        borderWidth: 5,
        borderColor: '#e224b8',
    
      },
      settingsbutton:{
        width:77,
        height:80,
        marginTop: -60,
        marginRight: 325,
        backgroundColor:'#a8e9fa',   
      },
      wracaniesbutton:{
        width:77,
        height:80,
        marginTop: -30,
        marginLeft: -105,
        backgroundColor:'#a8e9fa', 
      },
      settingsbuttonHome:{
        width:77,
        height:80,
        marginTop: 50,
        marginLeft: -105,
        backgroundColor:'#a8e9fa',
      },
      closebutton:{
        width:50,
        height:50,
        marginTop: -30,
        marginLeft: -105,
        backgroundColor:'#a8e9fa',   
      },
})
export {MyjZeby, Ustawienia, Wroc, Wroc2, Home};

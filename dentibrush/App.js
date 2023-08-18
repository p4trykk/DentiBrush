//import { createDrawerNavigator } from "@react-navigation/drawer";
import React, {useState, useEffect, useRef, createContext, useContext} from "react";
import {Button,StyleSheet,Text, View,Image, Pressable, ImageBackground, TouchableOpacity, Modal, ScrollView, Alert} from "react-native";
//import Buttonx from './components/tuBedziePrzycisk';
import {Home, MyjZeby, Ustawienia, Wroc, Wroc2} from "./Myj";
//import { create } from "react-test-renderer";
//import StackNavigator from 'react-navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CountDown from 'react-native-countdown-component';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi } from '@reduxjs/toolkit/query/react';


// const getFonts = () =>Font.loadAsync({
//     'hennypenny-regular': require('./assets/fonts/HennyPenny-Regular.ttf')
// });
//const Drawer = createDrawerNavigator();

//let STORAGE_KEY = '@user_score';

const Stack = createStackNavigator();
// const onPressHandler = () => {
//   SetSubmitted(!submitted)
// }





function ScreenA2({navigation}){
  // const incrementHandler = async () => {
  //   setCounter(counter+1);
  //   await AsyncStorage.setItem('@count', (counter+1).toString());

  // }
  const onPressHandler11 = () => {
    navigation.navigate("ScreenB");
    //SetSubmitted(!submitted)
  }
  const onPressHandler22 = () => {
    navigation.navigate("ScreenC");
    //SetSubmitted(!submitted)
  }
  const onPressHandler5 = () => {
    navigation.navigate("ScreenC2");
    //SetSubmitted(!submitted)
  }
  const [showWarning, SetshowWarning] = useState(false);

  return(

    <View style={styles.container}>
      <Modal transparent>
        <View style={styles.alertBackground}>
          <View style={styles.alertContainer}>
            <View style={{alignItems: 'center'}}>
              <Wroc2 onPressFunction={onPressHandler5} />
              <Text style={{color: '#e224b8', fontSize: 30}}>BRAWO! Udało się!</Text>
              <Image source={require('./assets/time_finish_alert.png')} style={{height: 60, width: 60}}></Image>
            </View>
            
          </View>
        </View>
      </Modal>
      
      <Image  style={styles.image} source={require('./assets/logo1.png')}></Image>
      <MyjZeby
        onPressFunction={onPressHandler11}
      />
      <Ustawienia
        onPressFunction={onPressHandler22}
      />   
    </View>
  )
}

function ScreenA({navigation}){

  const onPressHandler = () => {
    navigation.navigate("ScreenB");
    //SetSubmitted(!submitted)
  }
  const onPressHandler2 = () => {
    navigation.navigate("ScreenC");
    //SetSubmitted(!submitted)
  }
  return(
    <View style={styles.container}>
       <Image  style={styles.image} source={require('./assets/logo1.png')}></Image>
        <MyjZeby
          onPressFunction={onPressHandler}
        />
        <Ustawienia
          onPressFunction={onPressHandler2}
        />  
    </View>
  )
}

function ScreenA3({navigation}){

  const onPressHandler = () => {
    navigation.navigate("ScreenB");
    //SetSubmitted(!submitted)
  }
  const onPressHandler2 = () => {
    navigation.navigate("ScreenC");
    //SetSubmitted(!submitted)
  }
  const onPressHandler55 = () => {
    navigation.navigate("ScreenA");
    //SetSubmitted(!submitted)
  }

  return(
    <View style={styles.container}>
      <Modal transparent>
        <View style={styles.alertBackground}>
          <View style={styles.alertContainer}>
            <View style={{alignItems: 'center'}}>
              <Wroc2 onPressFunction={onPressHandler55} />
              <Text style={{color: '#e224b8', fontSize: 30}}>SMACZNEGO!</Text>
              <Text style={{color: '#e224b8', fontSize: 15}}>Nie zapomnij o umyciu zębów</Text>
              <Image source={require('./assets/time_finish_alert.png')} style={{height: 60, width: 60}}></Image>
            </View>
            
          </View>
        </View>
      </Modal>
       <Image  style={styles.image} source={require('./assets/logo1.png')}></Image>
        <MyjZeby
          onPressFunction={onPressHandler}
        />
        <Ustawienia
          onPressFunction={onPressHandler2}
        />   
    </View>
  )
}


function ScreenB({navigation}){
  // const Alert =({children})=>{
  //   return(
  //       <View style={styles.alertBackground}>
  //         <View style={[styles.alertContainer]}>
  //           {children}
  //         </View>
  //       </View>
  //   )
  // }
  const onPressHandler4 = () => {
    navigation.navigate("ScreenA");
    //SetSubmitted(!submitted)
  }
  

  const refTimer=useRef();
  
  const [timerEnd, setTimerEnd] = useState(false);
  const timerCallbackFunc = (timerFlag) => {
    setTimerEnd(timerFlag)
    navigation.navigate("ScreenA2")
  
    {/* // <Alert>
    //   <View style={{alignItems: 'center'}}>
    //     <Wroc2 onPressFunction={onPressHandler5} />
    //     <Image source={require('./assets/time_finish_alert.png')} style={{height: 60, width: 60}}></Image>
    //     <Text style={{color: '#e224b8', fontSize: 30}}>BRAWO! Udało się!</Text>
    //   </View>
    // </Alert> */}
  }

  return(
    <View style={styles.container}>
        <Image  style={styles.image} source={require('./assets/logo1.png')}>      
        </Image>
        <View style={{ display: timerEnd ? 'none' : 'flex' }}>
          <CountDownTimer ref={refTimer} timestamp={10} 
            timerCallback={timerCallbackFunc}
            containerStyle={{
              width: 60,
              marginTop: -60,
              marginLeft: 23,
              backgroundColor: '#a8e9fa',
              borderWidth: 6,
              borderRadius: 240/2,
              height: 200,
              width: 100,
              borderColor: '#e224b8',
              width:200,
            }}
            textStyle={{
                fontSize: 60,
                marginTop: 50,
                color: '#e224b8',
                borderColor: '#e224b8',
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: 2,
              }}
          />
      {/* <TouchableOpacity
        style={{
          display: timerEnd ? 'flex' : 'none',
          height: 56,
          width: 120,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
          backgroundColor: '#512da8',
        }}
        onPress={() => {
          setTimerEnd(false);
          refTimer.current.resetTimer();
        }}>
          <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}></Text>
        </TouchableOpacity> */}
      <Home
        onPressFunction={onPressHandler4}
      />  
      </View>              
    </View>
      // <View>
      //   <Text>
      //     Screen A
      //   </Text>
      // </View>
  )
    
  

}





function ScreenC({navigation}){

  const [counter, setCounter]=React.useState(0);

  const getData = async ()=>{
    const countValue = await AsyncStorage.getItem('@count');
    const count = parseInt(countValue);
    setCounter(isNaN(count) ? 0 : count);
  
  }

  // const saveCount = async counter =>{
  //   try{
  //     await AsyncStorage.setItem('counter', counter);
  //   }catch(error){
  //     console.log('ERROR!!!');
  //   }
  // }
  // const getCount = async()=>{
  //   let counter='';
  //   try{
  //     counter = await AsyncStorage.getItem('counter') || 'none';
  //   }catch(error){
  //     console.log('Znowu ERROR!!!');
  //   }
  //   return counter;
  // }

  //React.useEffect(getData);

  // const storeData = async()=>{
  //   try{
  //     await AsyncStorage.setItem(STORAGE_KEY, counter);
  //   }catch(e){
  //     alert('Failed :C')
  //   }

  // }

  const onPressHandler3 = () => {
    navigation.navigate("ScreenA");
    //SetSubmitted(!submitted)
  }
  const onPressHandler8 = () => {
    navigation.navigate("ScreenB");
    //SetSubmitted(!submitted)
  }
  const [showWarning1, SetshowWarning1] = useState(false);
  const [showWarning2, SetshowWarning2] = useState(false);
  const [showWarning3, SetshowWarning3] = useState(false);
  const [showWarning4, SetshowWarning4] = useState(false);
  const [showWarning5, SetshowWarning5] = useState(false);
  const [showWarning6, SetshowWarning6] = useState(false);

  const [modalVisible, setModalVisible]=useState(true);
  const onPressHandlerToSettingPage = () => {
    setModalVisible(false);
    incrementHandler();
    //SetSubmitted(!submitted)
  }

  const incrementHandler = async () => {
    
    await AsyncStorage.setItem('counter', (counter+1).toString());
    setCounter(counter + 1);
    //const countValue = await AsyncStorage.getItem(STORAGE_KEY);
    //const count = parseInt(countValue);

  }
  const getCount = async () => {
      counter = await AsyncStorage.getItem('counter').then(
        (value)=>setCounter(value)
      );
  }
  // useEffect(()=>{
  //   incrementHandler();
  // },[]);

  //const onChangeValue = countValue => setCounter(countValue);

  // const onSubmitEditing=()=>{
  //   if(!counter) return;
  //   storeData(counter);
  //   setCounter(counter);
  // }

  // const { count, increment, decrement } = useCounter();


  const Cukierek = () =>{
    SetshowWarning1(true);
  }
  const Batonik = () =>{
    SetshowWarning2(true);
  }
  const Lizak = () =>{
    SetshowWarning3(true);
  }
  const Zelki = () =>{
    SetshowWarning4(true);
  }
  const Czekolada = () =>{
    SetshowWarning5(true);
  }
  const Ciasteczko = () =>{
    SetshowWarning6(true);
  }
  return(
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
        <Image style={styles.profileimage} source={require('./assets/5087579.png')}></Image>
        <Wroc
            onPressFunction={onPressHandler3}
        />
        <Text style={styles.usertext}>Użytkownik nr 1</Text>
        <Text style={styles.jointext}>Dodano 29.11.2022</Text>
        <Text style={styles.pointstext}>Punkty: {counter}</Text>
        {/* <Button title="Increment" onPress={() => increment()} /> */}
        <View>
          <Text style={styles.awardstext}>Nagrody: </Text> 
        </View>
        <View style={styles.awardConteiner}>
          <TouchableOpacity style={styles.award1} onPress={Cukierek}>
            <Text style={styles.awardtxt1}>Cukierek</Text>
            <Image style={styles.sweetimg} source={require('./assets/sweet.png')}></Image>
          </TouchableOpacity>        
          <Modal transparent
            visible={showWarning1}
            onRequestClose={()=>
              SetshowWarning1(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning1(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Cukierek otrzymasz za </Text>
                  <Text style={{color: '#e224b8', fontSize: 40}}>umycie zębów</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={onPressHandler8}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginTop: 3}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>UMYJ TERAZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>

          <TouchableOpacity style={styles.award2} onPress={Batonik}>
            <Text style={styles.awardtxt1}>Batonik</Text>
            <Image style={styles.batonikimg} source={require('./assets/batonik.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning2}
            onRequestClose={()=>
              SetshowWarning2(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning2(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Batonik otrzymasz za: </Text>
                  <Text style={{color: '#e224b8', fontSize: 40}}>umycie zębów</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={onPressHandler8}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginTop: 3}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>UMYJ TERAZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>
          <TouchableOpacity style={styles.award3} onPress={Lizak}>
            <Text style={styles.awardtxt1}>Lizak</Text>
            <Image style={styles.lollipopimg} source={require('./assets/lollipop.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning3}
            onRequestClose={()=>
              SetshowWarning3(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning3(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Lizaka otrzymasz za: </Text>
                  <Text style={{color: '#e224b8', fontSize: 40}}>umycie zębów</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={onPressHandler8}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginTop: 3}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>UMYJ TERAZ</Text>
                  </TouchableOpacity>

                </View>          
              </View>
            </View>

          </Modal>


          <TouchableOpacity style={styles.award4} onPress={Zelki}>
            <Text style={styles.awardtxt1}>Żelki</Text>
            <Image style={styles.jellyimg} source={require('./assets/jelly.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning4}
            onRequestClose={()=>
              SetshowWarning4(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning4(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Żelki otrzymasz za: </Text>
                  <Text style={{color: '#e224b8', fontSize: 40}}>umycie zębów</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={onPressHandler8}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginRight:10, marginTop: 3}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>UMYJ TERAZ</Text>
                  </TouchableOpacity>

                </View>          
              </View>
            </View>

          </Modal>

          <TouchableOpacity style={styles.award5} onPress={Czekolada}>
            <Text style={styles.awardtxt1}>Czekolada</Text>
            <Image style={styles.chocoimg} source={require('./assets/choco.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning5}
            onRequestClose={()=>
              SetshowWarning5(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning5(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Czekoladę otrzymasz za: </Text>
                  <Text style={{color: '#e224b8', fontSize: 40}}>umycie zębów</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={onPressHandler8}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginTop: 3}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>UMYJ TERAZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>

          <TouchableOpacity style={styles.award6} onPress={Ciasteczko}>
            <Text style={styles.awardtxt1}>Ciasteczko</Text>
            <Image style={styles.cakeimg} source={require('./assets/cake.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning6}
            onRequestClose={()=>
              SetshowWarning6(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning6(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Ciastko otrzymasz za: </Text>
                  <Text style={{color: '#e224b8', fontSize: 40}}>umycie zębów</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={onPressHandler8}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginTop: 3}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>UMYJ TERAZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>

        </View>
      </View>  
    </ScrollView>

  )
}

function ScreenC2({navigation}){

  const [counter, setCounter]=React.useState(0);

  const getData = async ()=>{
    const countValue = await AsyncStorage.getItem('@count');
    const count = parseInt(countValue);
    setCounter(isNaN(count) ? 0 : count);
  
  }

  const onPressHandler3 = () => {
    navigation.navigate("ScreenA");
    //SetSubmitted(!submitted)
  }
  const onPressHandler8 = () => {
    navigation.navigate("ScreenA");
    //SetSubmitted(!submitted)
  }
  const onPressHandler88 = () => {
    navigation.navigate("ScreenA3");
    //SetSubmitted(!submitted)
  }
  const [showWarning1, SetshowWarning1] = useState(false);
  const [showWarning2, SetshowWarning2] = useState(false);
  const [showWarning3, SetshowWarning3] = useState(false);
  const [showWarning4, SetshowWarning4] = useState(false);
  const [showWarning5, SetshowWarning5] = useState(false);
  const [showWarning6, SetshowWarning6] = useState(false);

  const [modalVisible, setModalVisible]=useState(true);
  const onPressHandlerToSettingPage = () => {
    setModalVisible(false);
    incrementHandler();
    //SetSubmitted(!submitted)
  }
  const decrementHandler = async ()=>{
    await AsyncStorage.setItem('counter', (counter+1).toString());
    setCounter(counter - 1);
    onPressHandler88();

  }
  const incrementHandler = async () => {
    
    await AsyncStorage.setItem('counter', (counter+1).toString());
    setCounter(counter + 1);
    //const countValue = await AsyncStorage.getItem(STORAGE_KEY);
    //const count = parseInt(countValue);

  }
  const getCount = async () => {
      counter = await AsyncStorage.getItem('counter').then(
        (value)=>setCounter(value)
      );
  }
  // useEffect(()=>{
  //   incrementHandler();
  // },[]);

  //const onChangeValue = countValue => setCounter(countValue);

  // const onSubmitEditing=()=>{
  //   if(!counter) return;
  //   storeData(counter);
  //   setCounter(counter);
  // }

  // const { count, increment, decrement } = useCounter();


  const Cukierek = () =>{
    SetshowWarning1(true);
  }
  const Batonik = () =>{
    SetshowWarning2(true);
  }
  const Lizak = () =>{
    SetshowWarning3(true);
  }
  const Zelki = () =>{
    SetshowWarning4(true);
  }
  const Czekolada = () =>{
    SetshowWarning5(true);
  }
  const Ciasteczko = () =>{
    SetshowWarning6(true);
  }
  return(
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
      <Modal transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <View style={styles.alertBackground}>
            <View style={styles.alertContainer}>
              <View style={{alignItems: 'center'}}>
                <Wroc2 onPressFunction={onPressHandlerToSettingPage} />
                <Text style={{color: '#e224b8', fontSize: 30, justifyContent: 'center', textAlign: 'center'}}>Możesz odebrać nagrodę!</Text>
                <Image source={require('./assets/time_finish_alert.png')} style={{height: 56, width: 56}}></Image>
              </View>            
            </View>
          </View>
        </Modal>
        <Image style={styles.profileimage} source={require('./assets/5087579.png')}></Image>
        <Wroc
            onPressFunction={onPressHandler3}
        />
        <Text style={styles.usertext}>Użytkownik nr 1</Text>
        <Text style={styles.jointext}>Dodano 29.11.2022</Text>
        <Text style={styles.pointstext}>Punkty: {counter}</Text>
        {/* <Button title="Increment" onPress={() => increment()} /> */}
        <View>
          <Text style={styles.awardstext}>Nagrody: </Text> 
        </View>
        <View style={styles.awardConteiner}>
          <TouchableOpacity style={styles.award1} onPress={Cukierek}>
            <Text style={styles.awardtxt1}>Cukierek</Text>
            <Image style={styles.sweetimg} source={require('./assets/sweet.png')}></Image>
          </TouchableOpacity>        
          <Modal transparent
            visible={showWarning1}
            onRequestClose={()=>
              SetshowWarning1(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning1(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Chcesz odebrać CUKIEREK?</Text>
                  <TouchableOpacity style={styles.odbierz4}  onPress={decrementHandler}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>ODBIERZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>

          <TouchableOpacity style={styles.award2} onPress={Batonik}>
            <Text style={styles.awardtxt1}>Batonik</Text>
            <Image style={styles.batonikimg} source={require('./assets/batonik.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning2}
            onRequestClose={()=>
              SetshowWarning2(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning2(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Chcesz odebrać BATONIK?</Text>
                  <TouchableOpacity style={styles.odbierz4}  onPress={decrementHandler}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>ODBIERZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>
          <TouchableOpacity style={styles.award3} onPress={Lizak}>
            <Text style={styles.awardtxt1}>Lizak</Text>
            <Image style={styles.lollipopimg} source={require('./assets/lollipop.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning3}
            onRequestClose={()=>
              SetshowWarning3(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning3(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Chcesz odebrać LIZAKA?</Text>
                  <TouchableOpacity style={styles.odbierz4}  onPress={decrementHandler}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>ODBIERZ</Text>
                  </TouchableOpacity>

                </View>          
              </View>
            </View>

          </Modal>


          <TouchableOpacity style={styles.award4} onPress={Zelki}>
            <Text style={styles.awardtxt1}>Żelki</Text>
            <Image style={styles.jellyimg} source={require('./assets/jelly.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning4}
            onRequestClose={()=>
              SetshowWarning4(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning4(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Chcesz odebrać ŻELKI?</Text>
                  <TouchableOpacity style={styles.odbierz4}  onPress={decrementHandler}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90, marginRight:10}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>ODBIERZ</Text>
                  </TouchableOpacity>

                </View>          
              </View>
            </View>

          </Modal>

          <TouchableOpacity style={styles.award5} onPress={Czekolada}>
            <Text style={styles.awardtxt1}>Czekolada</Text>
            <Image style={styles.chocoimg} source={require('./assets/choco.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning5}
            onRequestClose={()=>
              SetshowWarning5(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning5(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Chcesz odebrać CZEKOLADĘ?</Text>
                  <TouchableOpacity style={styles.odbierz4}  onPress={decrementHandler}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>ODBIERZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>

          <TouchableOpacity style={styles.award6} onPress={Ciasteczko}>
            <Text style={styles.awardtxt1}>Ciasteczko</Text>
            <Image style={styles.cakeimg} source={require('./assets/cake.png')}></Image>
          </TouchableOpacity>
          <Modal transparent
            visible={showWarning6}
            onRequestClose={()=>
              SetshowWarning6(false)
            }
          >
            <View style={styles.alertBackground}>
              <View style={styles.alertContainer2}>
                <View style={{alignItems: 'center'}}>
                  <Wroc2 onPressFunction={()=>SetshowWarning6(false)} />
                  <Text style={{color: '#e224b8', fontSize: 25}}>Chcesz odebrać CIASTECZKO?</Text>
                  <TouchableOpacity style={styles.odbierz4} onPress={decrementHandler}>
                    <Image source={require('./assets/nagrody_zabek.png')} style={{height: 90, width: 90}}></Image>
                    <Text style={{marginTop: 28, fontSize: 30, color: '#e224b8'}}>ODBIERZ</Text>
                  </TouchableOpacity>
                </View>          
              </View>
            </View>

          </Modal>

        </View>
      </View>  
    </ScrollView>

  )
}


function App()
{  
  return (
    // <View style={styles.container}>
    //   <Image  style={styles.image} source={require('./assets/logo1.png')}></Image>
    //     <MyjZeby
    //       onPressFunction={onPressHandler}
    //     />
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          header: () => null
        }}>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          
        />
        <Stack.Screen
          name="ScreenC"
          component={ScreenC}
          
        />
        <Stack.Screen
          name="ScreenA2"
          component={ScreenA2}
          
        />
        <Stack.Screen
          name="ScreenA3"
          component={ScreenA3}
          
        />
        <Stack.Screen
          name="ScreenC2"
          component={ScreenC2}
          
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#a8e9fa',
    alignItems: 'center',
    
  },
  awardConteiner:{
    justifyContent: 'space-evenly',
  },
  award1:{
    backgroundColor: '#ff87ca',
    width: 350,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',

  },
  awardtxt1:{
    fontSize: 30,
    textAlign: "left",
    marginLeft: 15,
    marginTop: 9,
  },
  sweetimg:{
    height:60,
    width:60,
    marginLeft: 150,

  },
  award2:{
    backgroundColor: '#FFC4E1',
    width: 350,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',

  },
  batonikimg:{
    height:50,
    width:50,
    marginLeft: 170,
    marginTop: 5,
  },
  award3:{
    backgroundColor: '#ffe0f4',
    width: 350,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',

  },
  lollipopimg:{
    height:50,
    width:50,
    marginLeft: 202,
    marginTop: 5,
  },
  award4:{
    backgroundColor: '#ffbfbf',
    width: 350,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',

  },
  jellyimg:{
    height:54,
    width:54,
    marginLeft: 202,
    marginTop: 5,
  },
  award5:{
    backgroundColor: '#ff8a8a',
    width: 350,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',

  },
  chocoimg:{
    height:54,
    width:54,
    marginLeft: 130,
    marginTop: 5,
  },
  award6:{
    backgroundColor: '#fc6579',
    width: 350,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',

  },
  cakeimg:{
    height:55,
    width:55,
    marginLeft: 126,
    marginTop: 2,
  },
  odbierz4:{
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: '#e224b8',
    borderRadius: 35,
    paddingLeft:13,
    paddingRight:13,
    paddingBottom: 10,
    marginTop: 10,
  },
  alertBackground:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer:{
    // width: '80%',
    // backgroundColor: '#a8e9fa',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    // borderRadius: 20,
    // elevation: 20,
    width:320,
    height:200,
    backgroundColor:'#a8e9fa',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 40,
  },
  alertContainer2:{
    // width: '80%',
    // backgroundColor: '#a8e9fa',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    // borderRadius: 20,
    // elevation: 20,
    width:320,
    height:280,
    backgroundColor:'#a8e9fa',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 40,
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 44,
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: -92,
  },
  usertext:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e224b8',
    fontFamily: 'HennyPenny',
  },
  pointstext:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e224b8',
    textAlign: "left",
    marginLeft: -165,
    marginTop: 20,
  },
  awardstext:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e224b8',
    textAlign: "left",
    marginLeft: -182,
    marginTop: 0,
  },
  soundbutton:{
    marginLeft: 7,
  },
  soundbutton2:{
    marginLeft: 20,
  },
  soundtext:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e224b8',
    marginLeft: -5,
  },
  jointext:{
    fontSize: 15,
    color: '#e224b8',
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
  image2:{
    width:500,
    height:500,
  },
  profileimage:{
    width:150,
    height:150,
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
  
})
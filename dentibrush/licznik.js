//import { createDrawerNavigator } from "@react-navigation/drawer";
import React, {useState, useEffect, useRef} from "react";
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


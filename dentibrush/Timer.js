import React from "react";
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import CountDown from 'react-native-countdown-component';

render() 
{
    return (
      <CountDown
        until={10}
        onFinish={() => alert('finished')}
        onPress={() => alert('Nie możesz teraz przerwać')}
        size={20}
      />
    )
}
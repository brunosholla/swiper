import React from 'react';
import {YellowBox, AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  wrapper: {
    width:Dimensions.get("window").width/3
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})



export default function App() {

  return (
      <View style={{
        flex: 1,
        flexDirection: 'column',

        alignItems: 'flex-start',
      }}>
        <Swiper
            dotStyle={{opacity:0}}
            activeDotStyle={{opacity:0}}
            horizontal={false }
            style={styles.wrapper}
            showsButtons={true}
            prevButton={<Icon  name="chevron-up" size={20} solid />}
            nextButton={ <Icon  name="chevron-down" size={20} solid />}
            buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'column', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between'}}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
  )
}



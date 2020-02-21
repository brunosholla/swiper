'use strict';

import {responsiveFontSize} from "react-native-responsive-dimensions";
import {Dimensions} from "react-native";

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

        slide1: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth:.3,
            borderRightColor:"#666",


           // backgroundColor:"#1E2638",
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
            fontSize: responsiveFontSize(1.4),
            fontWeight: 'bold',




        },
        wrapper: {
            // width: responsiveWidth(30)
        },
        SubmitButtonStyle: {
            //  flex:1,
            width: Dimensions.get("window").height / 3,
            height: 100,
            marginTop: 10,
            paddingTop: 15,
            paddingBottom: 20,
            marginLeft: 5,
            marginBottom: 10,
            marginRight: 5,

            // backgroundColor: '#92BBD9',
            borderRadius: 10,
           // backgroundImage:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
            //borderWidth: 1,
            // borderColor: '#fff'
        }


});
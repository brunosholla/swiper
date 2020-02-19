import React, {Component} from 'react';
import {YellowBox,TouchableHighlight, Button,AppRegistry,TouchableOpacity, StyleSheet,FlatList, Text, View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome5";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import {getData} from "./sendData.js"


const styles = {

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
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        textAlign: 'center',


    },
    wrapper: {
        // width: responsiveWidth(30)
    },
    SubmitButtonStyle: {
      //  flex:1,
width: Dimensions.get("window").height/3,
height: 100,
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 20,
        marginLeft: 5,
        marginBottom: 10,
        marginRight: 5,
        backgroundColor: '#92BBD9',
        borderRadius: 10,
        //borderWidth: 1,
       // borderColor: '#fff'
    },
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true,
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",

                },
                {
                    "id": 2,
                    "name": "Ervin Howell",

                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",

                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",

                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",

                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",

                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",

                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",

                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",

                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                }
            ],
        }
    }

    createTextListArr = (i) => {

        const {data} = this.state;
        let textListArr = [];
        for (let j = 5 * i; j < 5 * i + 5; j++) {
            console.log(data[j])
            textListArr.push(
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={ .5 }
                    onPress={ this.ButtonClickFunction }
                    >
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>{data[j].name}</Text>
                    </View>

                </TouchableOpacity>
            );
        }

        return textListArr
    }

    createViewListArr() {

        const {data} = this.state;
        let viewListArr = [];

        for (let i = 0; i < data.length / 5; i++) {
            //console.log(data[i].id)
            viewListArr.push(
                <View key={data[i].id} style={styles.slide1}>
                    {this.createTextListArr(i)}
                </View>
            );
        }
        return viewListArr
    }

    createSwiper() {
        //console.log(this.createViewListArr())

        let swiper = <Swiper
            dotStyle={{opacity:0}}
            activeDotStyle={{opacity:0}}
            horizontal={false }
            style={styles.wrapper}
            showsButtons={true}
            prevButton={<Icon  name="chevron-up" size={20} solid


                    />}
            nextButton={ <Icon

                     name="chevron-down" size={20} solid />}
            buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'column', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between'}}
            >
            {this.createViewListArr()}
        </Swiper>
        //console.log(swiper)
        return swiper
    }

    render() {

        //const {data} = this.state;
        let swiper = this.createSwiper();

        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{
        flex: 1,
        flexDirection: 'column',

        alignItems: 'flex-start',
      }}>
                    {swiper}
                </View>

                <View style={{flex: 2,backgroundColor: 'steelblue'}}>

                </View>
            </View>
        )
    }
}
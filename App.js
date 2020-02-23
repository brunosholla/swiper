import React, {Component} from 'react';
import {

    TouchableOpacity,
    StyleSheet,
    FlatList,
    Text,
    View,
    Dimensions, ImageBackground, Image
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome5";
//import Bubble from "./Animation/Bubble";
import Bubbles from "./Animation/Bubbles";
import Bubble from "./Animation/Bubble";
import CategoriesGrid from "./Animation/CategoriesGrid";
import BubbleGrid from "./Animation/BubbleGrid";


const customData = require('./data/data.json');
var styles = require('./style');


export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true,
            data: customData,
            category:0
        }
    }

    generateBubbles(i) {
        this.setState({category:i})
    }

    createTextListArr = (i) => {

        const {data} = this.state;
        let textListArr = [];
        //for (let j = 5 * i; j < 5 * i + 5; j++) {
        // console.log(data[j])
        textListArr.push(
            <TouchableOpacity
                key={i}
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={()=>this.generateBubbles(i)}
            >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <ImageBackground source={require("./images/hamb.png")} style={{width: 80, height: 68}}>
                        <View style={{
                            position: 'absolute',
                            top: -10,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Text style={styles.text}>{data[i].name}</Text>
                        </View>
                    </ImageBackground>
                </View>

            </TouchableOpacity>
        );
        //}

        return textListArr
    }

    createViewListArr() {

        const {data} = this.state;
        let viewListArr = [];

        let dataarr = []

        for (let i = 0; i < data.length; i++) {
            //console.log(data[i].id)
            viewListArr.push(
                this.createTextListArr(i)
            );
            if (i > 0 && i % 5 === 0) {
                dataarr.push(
                    <View key={data[i].id} style={styles.slide1}>
                        {viewListArr}
                    </View>
                )
                viewListArr = []
            }
        }
        return dataarr
    }

    createSwiper() {
        //console.log(this.createViewListArr())

        let swiper = <Swiper
            dotStyle={{opacity: 0}}
            activeDotStyle={{opacity: 0}}
            horizontal={false}
            style={styles.wrapper}
            showsButtons={false}
            prevButton={<Icon name="chevron-up" size={20} solid/>}
            nextButton={<Icon name="chevron-down" size={20} solid/>}
            buttonWrapperStyle={{
                backgroundColor: 'transparent',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                left: 0,
                flex: 1,
               paddingHorizontal: 10,
              paddingVertical: 10,
                justifyContent: 'space-between',
                rotate: '90deg'

            }}
        >
            {this.createViewListArr()}
        </Swiper>
        //console.log(swiper)
        return swiper
    }

    render() {
        const {data,category} = this.state;
        let swiper = this.createSwiper();

        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: "#FFDB0A",

                    alignItems: 'flex-start',
                }}>
                    <CategoriesGrid category={category}/>
                </View>

                <View style={{flex: 2, backgroundColor: '#1E2638'}}>
                    <BubbleGrid category={category}/>
                </View>

            </View>
        )
    }
}
import React, {Component} from 'react';
import {
    YellowBox,
    TouchableHighlight,
    Button,
    AppRegistry,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Text,
    View,
    Dimensions, ImageBackground
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome5";

const customData = require('./data.json');
var styles = require('./style');


export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true,
            data: customData,
        }
    }

    ButtonClickFunction(){
        console.log("dfdgd")
    }
    createTextListArr = (i) => {

        const {data} = this.state;
        let textListArr = [];
        for (let j = 5 * i; j < 5 * i + 5; j++) {
            console.log(data[j])
            textListArr.push(
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={this.ButtonClickFunction}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground source={require("./images/red.png")} style={{width:120,height:62}} >
                            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.text}>{data[j].name}</Text>
                            </View>
                        </ImageBackground>
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
            dotStyle={{opacity: 0}}
            activeDotStyle={{opacity: 0}}
            horizontal={false}
            style={styles.wrapper}
            showsButtons={true}
            prevButton={<Icon name="chevron-up" size={20} solid />}
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
                justifyContent: 'space-between'
            }}
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
                    backgroundColor:"#fff",

                    alignItems: 'flex-start',
                }}>
                    {swiper}
                </View>

                <View style={{flex: 2, backgroundColor: '#fff'}}>

                </View>
            </View>
        )
    }
}
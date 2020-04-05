import React, {Component} from 'react';
import {
    Image, ImageBackground, ScrollView, Text,

    View,

} from 'react-native'

import Bubble from "./Animation/Bubble";

import {Header, ThemeProvider} from "react-native-elements";
import BouncingBallsComponent from "./Animation/Balls";
import Printo from "./print/Printo";


const customData = require('./data/data.json');
var styles = require('./style');
const logo = require("./images/logoWhite.png")

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true,
            data: customData,
            category: 0,
            printo: true

        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal = () => {
        this.setState(prevState => ({
            printo: !prevState.printo
        }));
    }

    render() {
        const {printo} = this.state
        return (
            <ThemeProvider>
                <View>
                    <Header
                        // leftComponent={{icon: 'menu', color: '#fff'}}
                        centerComponent={<Image source={logo} style={{width: 210, height: 50}}/>}
                        // rightComponent={{icon: 'home', color: '#fff'}}
                        containerStyle={{
                            backgroundColor: '#000',
                            // justifyContent: 'space-around',
                        }}
                    />
                </View>

                <View style={{flex: 1, flexDirection: 'row', backgroundColor: "#FFDB0A"}} {...this.props.panResponder}>
                    {printo?<Printo/>:<BouncingBallsComponent openModal={this.toggleModal}/>}

                </View>

                <View style={{
                    flex: .1,
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View><Text style={{color: "#fff"}}>
                        No.1 Asian Fusion Restaurant in Tirana 【Wok in & To Go】
                        Chinese Wok | Japanese Sushi | Korean Kimbap
                    </Text></View>
                </View>
            </ThemeProvider>
        )
    }
}
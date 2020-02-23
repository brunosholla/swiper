import React, {Component} from 'react'
import {ImageBackground, Text, View} from "react-native";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import Animate from "./Animate";

const productet = require('../data/products');

export default class Bubbles extends Component {


    constructor() {
        super();
        this.state = {
            products: []
        }
        this.generateBubbles = this.generateBubbles.bind(this)
    }

    generateBubbles() {
        const {category} = this.props
        return productet.filter(el => el.category === category) || []

    }

    render() {

        const products = this.generateBubbles()
        return (
            products.map((p,index) => {
                return (
                    <View key={index} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Animate bubble={

                            <ImageBackground source={require("../images/bubble.gif")}
                                             style={{width: 80, height: 80}}>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: responsiveFontSize(1.4),
                                        fontWeight: 'bold',
                                    }}>{p.name}</Text>
                                </View>
                            </ImageBackground>
                        }
                        />
                    </View>
                )

            })
        )
    }
}
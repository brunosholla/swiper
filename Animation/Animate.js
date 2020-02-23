import React, {Component} from 'react'
import {ImageBackground, Text, View, Animated, StyleSheet, Easing, Dimensions} from "react-native";

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const effects=[
    Easing.bounce,
    Easing.cubic,
    Easing.back(2),
    Easing.elastic(2),
    Easing.ease,
    Easing.inOut(Easing.quad),
    Easing.in(Easing.quad),
    Easing.out(Easing.quad),
    Easing.sin,
    Easing.linear,
    Easing.quad
]

export default class Animate extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate()
    }

    animate() {


        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: randomIntFromInterval(5000,15000),
                easing:effects[randomIntFromInterval(0,10)]

            }
        ).start(() => this.animate())

    }

    render() {

        const opacity = this.animatedValue.interpolate({
            inputRange: [0.0, 1.0],
            outputRange: [1.0, 0.5], // animate between 1 and 0.5
            extrapolate: 'clamp',
        })

        const translateY = this.animatedValue.interpolate({
            inputRange: [0.1, 2.0],
            outputRange: [0, -50], // animated between 0 and -42
            extrapolate: 'clamp',
            //yPosition: 50 + Math.random() * (WINDOW_HEIGHT - 60)
        });

        return (
            <View style={styles.container}>
                <Animated.View
                    style={{

                        transform: [{translateY}],

                    }}>
                    {this.props.bubble}
                </Animated.View>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150
    }
})

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
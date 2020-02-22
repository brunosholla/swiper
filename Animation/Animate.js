import React, {Component} from 'react'
import {ImageBackground, Text, View, Animated, StyleSheet, Easing, Dimensions} from "react-native";

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;


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
                duration: 5000,
                easing: Easing.bounce
            }
        ).start(() => this.animate())
    }

    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, WINDOW_WIDTH]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0.0, 1.0],
            outputRange: [1.0, 0.5], // animate between 1 and 0.5
            extrapolate: 'clamp',
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const marginTopAnimated = this.animatedValue.interpolate({
            inputRange: [0.0, 1.0],
            outputRange: [0, -42], // animated between 0 and -42
            extrapolate: 'clamp',
            //yPosition: 50 + Math.random() * (WINDOW_HEIGHT - 60)
        });
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        //marginTopAnimated,

                        //marginLeft,
                        transform: [{translateY: marginTopAnimated}],
                        opacity
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
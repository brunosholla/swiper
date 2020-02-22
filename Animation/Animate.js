import React, {Component} from 'react'
import {ImageBackground, Text, View, Animated,StyleSheet,Easing} from "react-native";

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
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })

        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        marginLeft,
                        opacity,
                        movingMargin,

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
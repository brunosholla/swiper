import React, {PureComponent} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import BouncingBalls from './BouncingBall'
const products = require('../data/products');

export default class BouncingBallsComponent extends PureComponent {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../images/bg.png')}>
                <BouncingBalls
                    amount={products.length}
                    products={products}
                    animationDuration={5000}
                    minSpeed={200}
                    maxSpeed={200}
                    minSize={40}
                    maxSize={70}
                    imageBall={require('../images/bubble.gif')}

                />

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

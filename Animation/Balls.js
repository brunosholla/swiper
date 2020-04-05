import React, {PureComponent} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import BouncingBalls from './BouncingBall'

export default class BouncingBallsComponent extends PureComponent {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../images/bg.png')}>
                <BouncingBalls
                    amount={10}
                    animationDuration={5000}
                    minSpeed={30}
                    maxSpeed={200}
                    minSize={40}
                    maxSize={100}
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

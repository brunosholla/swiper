import React, {PureComponent} from 'react';
import {View, Image, StyleSheet, Dimensions, Animated, Easing, Text, ImageBackground,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {responsiveFontSize} from "react-native-responsive-dimensions";
import Printo from "../print/Printo";

let {width, height} = Dimensions.get("window");
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
class BouncingBalls extends PureComponent {
    static propTypes = {
        amount: PropTypes.number.isRequired,
        products: PropTypes.array.isRequired,
        animationDuration: PropTypes.number.isRequired,
        animationType: PropTypes.func,
        minSpeed: PropTypes.number.isRequired,
        maxSpeed: PropTypes.number.isRequired,
        minSize: PropTypes.number.isRequired,
        maxSize: PropTypes.number.isRequired,
        imageBall: PropTypes.node,
    };

    static defaultProps = {
        amount: 1,
        products: [ {
            "id": 100,
            "name": "山",
            "category":1,
            "meaning":"This is a test"

        }],
        animationDuration: 5000,
        minSpeed: 30,
        maxSpeed: 200,
        minSize: 200,
        maxSize: 500,
        animationType: Easing.linear,
    };

    constructor(props) {
        super(props);

        this.screenWidth = Dimensions.get('window').width;
        this.screenHeight = Dimensions.get('window').height;
        this.circles = this.generateCircles();

        this.state = {
            position: new Animated.ValueXY({x: 0, y: 0}),
        };

        this.printo=this.printo.bind(this)
    }

    componentDidMount() {
        this.traverseCircles();
    }

    componentWillUnmount() {
        this.circles.forEach((item, index) => {
            this.state[`position${index}`].stopAnimation();
        });
    }

    traverseCircles() {
        this.circles.forEach((circle, index) => {
            this.setState({
                [`position${index}`]: new Animated.ValueXY({x: circle.props.x, y: circle.props.y}),
            }, () => {
                const _circle = this.updateCirclePosition(circle.props, index);
                this.circleStartAnimation(_circle, index);
            });
        });
    }

    circleStartAnimation(circle, index) {
        const {animationDuration, animationType} = this.props;
        Animated.timing(
            this.state[`position${index}`],
            {
                toValue: {x: circle.x, y: circle.y},
                duration: animationDuration,
                easing: animationType,
            },
        ).start(() => {
            const currentPosition = this.state[`position${index}`];
            currentPosition.stopAnimation(() => {
                currentPosition.setValue({x: circle.x, y: circle.y});
                let _circle = this.updateCirclePosition(circle, index);
                requestAnimationFrame(() => this.circleStartAnimation(_circle, index));
            });
        });
    }

    updateCirclePosition(circle) {
        const _circle = Object.assign({}, circle);
        const height = width = circle.style[1].width;
        const maxWidth = this.screenWidth - width;
        const maxHeight = this.screenHeight - height;

        _circle.x = _circle.x + _circle.speedX;
        _circle.y = _circle.y + _circle.speedY;

        if (_circle.x <= 0) {
            _circle.x = 0;
            _circle.speedX *= (-1);
        } else if (_circle.x >= maxWidth) {
            _circle.x = maxWidth;
            _circle.speedX *= (-1);
        }

        if (_circle.y <= 0) {
            _circle.y = 0;
            _circle.speedY *= (-1);
        } else if (_circle.y >= maxHeight) {
            _circle.y = maxHeight;
            _circle.speedY *= (-1);
        }

        return _circle;
    }

    getRangeFromMinToMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    printo(product){


    }

    generateCircles() {
        const {amount, products, minSpeed, maxSpeed, minSize, maxSize, imageBall, style, ...restProps} = this.props;
        const circles = [];
        let width, height, borderRadius, innerStyle, restStyles, item, direction;

        if (amount < 1) return null;

        for (var i = 0; i < amount; i++) {
            height = width = this.getRangeFromMinToMax(minSize, maxSize);
            borderRadius = height * 0.5;
            direction = Math.round(Math.random()) === 0 ? -1 : 1;

            innerStyle = {
                height,
                width,
                borderRadius,
            };

            restStyles = {
                x: this.getRangeFromMinToMax(0, this.screenWidth - width),
                y: this.getRangeFromMinToMax(0, this.screenHeight - height),
                speedX: direction * this.getRangeFromMinToMax(minSpeed, maxSpeed),
                speedY: direction * this.getRangeFromMinToMax(minSpeed, maxSpeed),
            };

            item = imageBall ?

                <AnimatedTouchable style={[styles.circle, {...innerStyle}, {...style}]} {...restStyles} {...restProps} source={imageBall}
                                   onPress={()=>this.printo(products[i])}>

                <ImageBackground  style={[styles.circle, {...innerStyle}, {...style}]} {...restStyles} {...restProps} source={imageBall}  >
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
                            fontSize: responsiveFontSize(0.7),
                            fontWeight: 'bold',
                        }}>{products[i].name}</Text>
                    </View>
                </ImageBackground>
                </AnimatedTouchable>

                : <View
                    style={[styles.circle, {...innerStyle}, {...style}]} {...restStyles} {...restProps}
                ><Text style={{color: "#000"}}>A</Text></View>;

            circles.push(item);
        }

        return circles;
    }

    render() {
        return <View style={styles.container}>
            {
                this.circles.map(((item, index) => {
                    return (
                        <Animated.View key={index}
                                       style={[this.state[`position${index}`] && this.state[`position${index}`].getLayout()]}
                        >
                            {item}
                        </Animated.View>
                    );
                }))
            }
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    circle: {
        position: 'absolute',
    },
    circlePosition: {
        position: 'absolute',
    },
});

export default BouncingBalls;
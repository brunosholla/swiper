/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    View, TouchableOpacity,
} from 'react-native';
import {AnimatedEmoji} from 'react-native-animated-emoji';

const products = require('../data/products');

//const randomEmojis = products;

const WINDOW_HEIGHT = Dimensions.get('window').height;
const EMOJI_AMOUNT = 20;

export default class Bubble extends Component {


    constructor(props) {
        super(props);

        this.state = {
            emojiArray: [],
            category: 0,
            randomEmojis: [],

        };

        this._emojis = {};
        this.emojiIndex = 0;
        this.getProducts = this.getProducts.bind(this)
        this._onPressButton = this._onPressButton.bind(this)
    }

    getProducts() {

        const {category} = this.props

        const prods = products.filter(el => el.category === category) || []
        this.setState({randomEmojis: prods}, () => this.genEmoji())


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (prevProps.category !== this.props.category) {
            console.log("this.props.category::", this.props.category)
            this.getProducts()
            //console.log("this.props.category::",this.props.category)
        }
    }

    componentDidMount() {
        const {category} = this.props
        this.setState({category, randomEmojis: products}, () => this.genEmoji())
        /**
         * Generate `EMOJI_AMOUNT` emojis for initial rendering
         */

    }

    genEmoji() {
        const {randomEmojis} = this.state
        for (let i = 0; i < randomEmojis.length; i++) {
            this.generateEmoji();
        }
    }

    /**
     * Function to generate emoji
     */
    generateEmoji = () => {
        const {emojiArray, randomEmojis} = this.state;


        const newEmojis = Object.assign(emojiArray, []);

        let index = Math.floor(Math.random() * Math.floor(12));
        // console.log("randomEmojis["+index+"]::",randomEmojis[index])
        if (!randomEmojis[index]) return;
        const emoji = {
            key: this.emojiIndex,
            meaning:randomEmojis[index].meaning,
            name: randomEmojis[index].name,
            size: Math.floor(Math.random() * Math.floor(20)) + 20,
            duration: Math.floor(Math.random() * Math.floor(10000)) + 2000,
            yPosition: 50 + Math.random() * (WINDOW_HEIGHT - 60)
        };
        newEmojis.push(emoji);
        this.emojiIndex += 1;

        this.setState({emojiArray: newEmojis});
    };

    /**
     * Animation completion callback
     * @param index
     */
    onAnimationCompleted = (index) => {
        const {emojiArray} = this.state;
        let newEmojis = Object.assign(emojiArray, []);
        newEmojis = newEmojis.filter(e => e.key !== index);
        this.setState({emojiArray: newEmojis}, () => this.generateEmoji());
    };

    _onPressButton(emoji) {
        const {name} = this.props
        alert("emoji::"+emoji.name+"meaning::"+emoji.meaning+"name::"+name)
    }

    render() {
      // console.log("emojiArray::",this.state.emojiArray)
        let emojiComponents = this.state.emojiArray.map((emoji) => {
            return (

                <AnimatedEmoji
                    key={emoji.key}
                    index={emoji.key}
                    ref={ref => this._emojis[emoji.key] = ref}
                    style={{bottom: emoji.yPosition, marginTop: 50}}
                    name={emoji}
                    size={emoji.size}
                    duration={emoji.duration}
                    onAnimationCompleted={this.onAnimationCompleted}
                    _onPressButton={this._onPressButton}

                />

            )
        });

        return (
            emojiComponents
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#F5FCFF',
    }
});
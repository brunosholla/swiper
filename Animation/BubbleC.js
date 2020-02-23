import React, {Component} from 'react'
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {AnimatedEmoji} from "react-native-animated-emoji";
//import FloatingHearts from 'react-native-floating-hearts'
const productet = require('../data/products');

class Bubble extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emojiArray: [],
            bubbles: [],
            prods: []
        };

        this._emojis = {};
        this.emojiIndex = 0;

        this.generateBubbles = this.generateBubbles.bind(this)
        this.getProducts = this.getProducts.bind(this)
    }

    generateBubbles(prods) {

        const newEmojis = []
        prods.map(b => {
            //this.generateEmoji(b);
            const emoji = {
                key: b.id,
                name: b.name,
                size: Math.floor(Math.random() * Math.floor(20)) + 20,
                duration: randomIntFromInterval(6000, 15000),
                yPosition: 50 + Math.random() * (WINDOW_HEIGHT - 60)
            };
            newEmojis.push(emoji);
        })
        return newEmojis;
    }

    getProducts() {

        const {category} = this.props
        if (category !== this.state.category) {
            const prods = productet.filter(el => el.category === category) || []
            this.setState({prods, bubbles: this.generateBubbles(prods)})
        }
        else {
            this.setState({bubbles: this.generateBubbles(this.state.prods)})

        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.category === this.props.category) {
            return this.state.bubbles;
        }
        const prods = productet.filter(el => el.category === this.props.category) || []
        return this.generateBubbles(prods);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (snapshot !== this.state.bubbles) {

            this.setState({bubbles: snapshot})
        }
    }

    componentDidMount() {
        this.getProducts()
        /**
         * Generate `EMOJI_AMOUNT` emojis for initial rendering
         */
        /*  for (let i = 0; i < EMOJI_AMOUNT; i++) {
              this.generateEmoji();
          }*/
        /* const bubbles= this.generateBubbles()
         console.log(bubbles)
         bubbles.map(b=>{
             this.generateEmoji(b);
         })*/
    }

    /**
     * Function to generate emoji
     */
    generateEmoji = (b) => {
        const {emojiArray} = this.state;
        const newEmojis = Object.assign(emojiArray, []);

        let index = Math.floor(Math.random() * Math.floor(3));

        const emoji = {
            key: this.emojiIndex,
            name: b.name,
            size: Math.floor(Math.random() * Math.floor(20)) + 20,
            duration: Math.floor(Math.random() * Math.floor(6000)) + 2000,
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

        const {bubbles} = this.state;
        let newEmojis = Object.assign(bubbles, []);
        newEmojis = newEmojis.filter(e => e.key !== index);
        this.setState({bubbles: newEmojis}, () => this.getProducts());
    };

    onAnimationEnd() {
        console.log("ENded")
    }

    render() {
        const {bubbles} = this.state;
        let emojiComponents = bubbles.map((emoji) => {
            return (
                <AnimatedEmoji
                    key={emoji.key}
                    index={emoji.key}
                    ref={ref => this._emojis[emoji.key] = ref}
                    style={{bottom: emoji.yPosition}}
                    name={emoji.name}
                    size={emoji.size}
                    duration={emoji.duration}
                    onAnimationCompleted={this.onAnimationCompleted}

                />
            )
        });

        return (
            <View style={styles.container}>
                {emojiComponents}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#F5FCFF',
    }
});

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const WINDOW_HEIGHT = Dimensions.get('window').height;
const EMOJI_AMOUNT = 20;

export default Bubble
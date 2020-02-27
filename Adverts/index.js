import React, {Component} from "react";
import {SLEEP_TIME} from 'react-native-dotenv'
import TimedSlideshow from 'react-native-timed-slideshow';
import {View} from "react-native";
import {importAll} from "../Services/functions";


export default class Adverts extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const items = [
            {
                uri: require("./images/1.jpg"),
                title: "",
                text: "",
                fullWidth: true,
                duration:15000
            },
            {
                uri: require("./images/2.jpg"),
                title: "Victor Fallon",
                text: "Val di Sole, Italy",
                duration: 3000
            },
            {
                uri: require("./images/3.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/4.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/5.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/6.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/7.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/8.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/9.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            },
            {
                uri: require("./images/10.jpg"),
                title: "Mary Gomes",
                text: "Alps",
                fullWidth: true
            }
        ]

        return (

                <TimedSlideshow
                    panResponder={this.props.panResponder}
                    items={items}
                    showProgressBar={false}
                    duration={5000}
                />

        );
    }
}

//{...this.props.panResponder}
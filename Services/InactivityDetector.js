import React, {Component} from "react";
import {PanResponder, StyleSheet, Text, TextInput, View} from "react-native";
import {SLEEP_TIME} from 'react-native-dotenv'

import Main from "../Main";
import Adverts from "../Adverts";

export default class InactivityDetector extends Component {
    state = {
        inactive: true,
    };

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: () => {
                clearTimeout(this.timeout);

                this.setState(state => {
                    if (state.inactive === false) return null;
                    return {
                        inactive: false,
                    };
                });

                this.timeout = setTimeout(() => {
                    this.setState({
                        inactive: true,
                    });
                }, parseInt(SLEEP_TIME));
                return false;
            },
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {

        return (
            this.state.inactive ?
                <Adverts panResponder={this._panResponder.panHandlers}/> :
                <Main panResponder={this._panResponder.panHandlers}/>

        );
    }
}

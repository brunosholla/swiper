import React, {Component} from "react";
import {PanResponder, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {SLEEP_TIME} from 'react-native-dotenv'

import Main from "../Main";
import Adverts from "../Adverts";
import EnterName from "../Adverts/EnterName";

export default class InactivityDetector extends Component {
    state = {
        inactive: true,
        name: null
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
                        name:null
                    });
                }, parseInt(SLEEP_TIME));
                return false;
            },
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    keepName = (name) => {
        console.log("name::",name)
        this.setState({name})
    }

    render() {
        const {name} = this.state
        return (
            this.state.inactive ?
                <Adverts panResponder={this._panResponder.panHandlers}/> :
                name === null ?
                    <EnterName keepName={this.keepName}/>
                    :
                    <Main panResponder={this._panResponder.panHandlers} name={name}/>
        );
    }
}


//<Main panResponder={this._panResponder.panHandlers}/>
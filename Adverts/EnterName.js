import React, {Component} from "react";
import {PanResponder, ImageBackground, StyleSheet, Text, TextInput, View,  TouchableOpacity} from "react-native";
import { Button } from 'react-native-elements';

export default class EnterName extends Component {

    constructor() {
        super();
        this.state = {
            name: ""
        }
        this.onChangeText = this.onChangeText.bind(this)
    }

    onChangeText = (name) => {
        this.setState({name})
    }


    render() {
        const {name} = this.state
        return (
            <ImageBackground source={require('../Adverts/images/4.jpg')} style={styles.image}>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <TextInput
                        style={{
                            textAlign: 'center',

                            width: '50%',
                            height: 50,
                            borderWidth: 2,
                            borderColor: '#FF5722',
                            borderRadius: 20,
                            backgroundColor: "#FFFFFF",
                            marginBottom:30

                        }}
                        onChangeText={text => this.onChangeText(text)}
                        value={name}
                    />

                        <Button
                            style={{color:"#FF5722"}}
                            onPress={() => this.props.keepName(name)}
                            title="Vazhdo"
                        />

                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,

        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }
});

const stylesB = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});

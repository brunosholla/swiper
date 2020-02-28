import React, {Component} from "react";
import {PanResponder, ImageBackground, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from "react-native";

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
                            height: 40,
                            width: "80%",
                            fontSize: 25,
                            fontWeight: "bold",
                            borderWidth: 2,
                            borderColor: "#fff",
                            color: "#000",
                            backgroundColor: "#fff"
                        }}
                        onChangeText={text => this.onChangeText(text)}
                        value={name}
                    />
                    <TouchableOpacity onPress={() => this.props.keepName(name)} style={stylesB.button}>
                        <Text style={stylesB.buttonText}>Ok</Text>
                    </TouchableOpacity>
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
        resizeMode: "cover",
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

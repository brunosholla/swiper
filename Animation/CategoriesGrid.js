import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default class vABubbleGrid extends Component {
    render() {
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (
            <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, i }) => (
                    <View style={[styles.itemContainer, { backgroundColor: '#fff' }]}>
                        <TouchableOpacity
                            key={i}
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}
                            onPress={()=>this.generateBubbles(i)}
                        >
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <ImageBackground source={require("../images/hamb.png")} style={{width: 80, height: 68}}>
                                    <View style={{
                                        position: 'absolute',
                                        top: -10,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        {/*<Text style={styles.text}>{item.name}</Text>*/}
                                    </View>
                                </ImageBackground>
                            </View>

                        </TouchableOpacity>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

import React, {Component} from 'react';
import {YellowBox,TouchableHighlight, Button,AppRegistry,TouchableOpacity, StyleSheet,FlatList, Text, View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome5";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";



const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wrapper: {
    width:responsiveWidth(30)
  },
  slide1: {
     // height:Dimensions.get("window").height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },


    button:{
        marginBottom: 10
    },
    SubmitButtonStyle: {

        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#00BCD4',
        borderRadius:20,
        borderWidth: 2,
        borderColor: '#fff'
    },

    TextStyle:{
        color:'#fff',
        textAlign:'center',
    }
})


export default class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            data:[],
            start: 0,
            difference:6,
            end: 6,
        }
    }

    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isLoading: false,
                    data: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }


    render() {
        const {data, start, end, difference} = this.state;
        const SCREEN_WIDTH = Dimensions.get("window").width;
        const SCREEN_HEIGHT = Dimensions.get("window").height;
        //console.log(Math.round(responsiveFontSize(2)));
        console.log(SCREEN_HEIGHT - 2* 0.03*SCREEN_HEIGHT);


        return (
            <View style={{
        flex: 1,
        flexDirection: 'column',

        alignItems: 'flex-start',
      }}>
                <Swiper
                    dotStyle={{opacity:0}}
                    activeDotStyle={{opacity:0}}
                    horizontal={false }
                    style={styles.wrapper}
                    showsButtons={true}
                    prevButton={<Icon  name="chevron-up" size={SCREEN_HEIGHT * 0.03} solid
                    onPress={() => this.setState({start: start-difference, end: end-difference})}

                    />}
                    nextButton={ <Icon
                     onPress={() => this.setState({start: start+difference, end: end+difference})}
                     name="chevron-down" size={SCREEN_HEIGHT * 0.03} solid />}
                    buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'column', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between'}}>
                    {data.map((item, key) => {

                        return (
                            <View key={key} style={styles.slide1}>
                                <FlatList
                                    contentContainerStyle={{ marginTop: 50}}
                                    data={data.slice(start,end)}
                                    renderItem={({ item, index }) => (
                                    <View style={styles.button}>
                                    <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >

            <Text style={styles.TextStyle}> {item.name} </Text>

      </TouchableOpacity>
                                    </View>
                                        )}
                                    />
                             </View>
                        )
                    })}




                </Swiper>
            </View>
        )
    }
}



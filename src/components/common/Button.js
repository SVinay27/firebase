import React, { Component } from 'react'
import { Text, TouchableOpacity ,StyleSheet} from 'react-native'


const Button = ({onPress,name}) => {
    const {buttonStyle,textStyle} =styles
        return (
            <TouchableOpacity 
                onPress={onPress}
                style={buttonStyle}>
                <Text style={textStyle}> {name} </Text>
            </TouchableOpacity>
    )
}

export {Button}


const styles= StyleSheet.create({
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        //backgroundColor:'#9765F9',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#9754F9',
        marginLeft:5,
        marginRight:5
    },
    textStyle:{
        alignSelf:'center',
        color:'#9754F9',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }
});
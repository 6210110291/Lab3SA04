import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text>{props.temp} °C</Text>
                <Text>Pressure : {props.pressure}</Text>
                <Text>Humidity : {props.humidity}</Text>
            </View>
            </View>
    )
}
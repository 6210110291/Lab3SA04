import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

export default function Forecast(props) {
    return (
          <View style={styles.Weather_Box_Main}>
            <View style={styles.Weather_Holder_View}>
            <Image tintColor='#FFF' 
                source={{uri:"http://openweathermap.org/img/wn/"+props.icon+"@2x.png",}} 
                style={styles.Weather_Image}/>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            </View>

            
        </View>

            
    )
}

const styles = StyleSheet.create({
    Weather_Box_Main:{
      height:"30%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
    },
    Weather_Holder_View:{
      height:"80%",
      width:"90%",
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius:15,
      alignItems:"center",
      flexDirection:"row"
    },
    Weather_Image:{
      height:"80%",
      width:"50%"
    },
  })
import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
          <View style={styles.Weather_Box_Main}>
            <View style={styles.Weather_Holder_View}>
                <Image tintColor='#FFF' 
                source={{uri:"http://openweathermap.org/img/wn/"+props.icon+"@2x.png",}} 
                style={styles.Weather_Image}/>
                
                <View>
                    <Text style={styles.City_text}>{props.name}</Text>
                    <Text style={styles.Main_text}>{props.main}</Text>
                    <Text style={styles.Des_text}>{props.description}</Text>
                </View>
            </View>
        </View>
        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.humidity_text}>Humidity : {props.humidity}</Text>
            <Text style={styles.other_text}>Pressure : {props.pressure}</Text>
          </View>
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
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius:15,
      alignItems:"center",
      flexDirection:"row"
    },
    Weather_Image:{
      height:"80%",
      width:"50%"
    },
    City_text: {
        fontSize:20,
        color:"#FFF",
        marginLeft:"8%",
        fontWeight:"bold"
    },
    Main_text: {
        fontSize:35,
        color:"#464646",
        marginLeft:"8%",
        fontWeight:"bold"
    },
    Des_text: {
        fontSize:15,
        color:"#464646",
        marginLeft:"8%",
    },
    Info_Box_View:{
        height:"45%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    Info_Holder_Veiw:{
        height:"80%",
        width:"90%",
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius:15
    },
    humidity_text:{
        fontSize:18,
        color:"#121212",
        marginLeft:"8%",
        marginTop:"5%"
    },
    other_text:{
        fontSize:18,
        color:"#121212",
        marginLeft:"8%",
        marginTop:"2%"
    }
  })
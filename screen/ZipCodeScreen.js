import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, SafeAreaView, FlatList, View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/AntDesign"
const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

const availableZipItems = [
    { place: 'Bangkok', code: '10110' },
    { place: 'Khon Kaen', code: '40000' },
    { place: 'Chiang Mai', code: '50000' },
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Yala', code: '95000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress = {() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>

        <View style = {styles.zipItem}>
            <Text style = {styles.place_text}>{place}</Text>
            <Text style = {styles.code_text}>{code}</Text>
        </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="#000"/>
                <ImageBackground source = {require('../bg2.jpg')} style = {styles.backdrop}>
                <Text style = {styles.text1}>What is</Text>
                <Text style = {styles.text2}>Weather</Text>
                <Text style = {styles.text3}>Today ?</Text>
                    <FlatList
                        data = {availableZipItems}
                         keyExtractor = {item => item.code}
                        renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
                    />
                </ImageBackground> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container:{
        height:Dev_Height,
        width: Dev_Width
    },
    zipItem: {
        flex: 1,
        height:"100%",
        width:"80%",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        marginLeft:"10%",
        marginTop:"3.5%",
    },
    text1: {
        fontSize:30,
        color:"#fffacd",
        fontWeight:"bold",
        marginLeft:"10%",
        marginTop:"5%"
    },
    text2: {
        fontSize:50,
        color:"#f0f0f0",
        fontWeight:"bold",
        marginLeft:"15%",
    },
    text3: {
        fontSize:33,
        color:"#fffacd",
        fontWeight:"bold",
        marginLeft:"10%",
    },
    place_text: {
        flex: 1,
        fontSize:20,
        color:"#464646",
        marginLeft:"5%",
    },
    code_text: {
        flex: 1,
        fontSize:20,
        color:"#464646",
        marginLeft:"5%",
    },
    backdrop: {
        width: '100%',
        height: '100%',
    }
})
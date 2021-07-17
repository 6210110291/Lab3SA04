import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, SafeAreaView, FlatList, View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/AntDesign"
const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiang Mai', code: '50000' },
    { place: 'Khon Kaen', code: '40000' },
    { place: 'Bangkok', code: '10110' },
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
                <Text style = {styles.text}>What is weather today ?</Text>
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
        height:"80%",
        width:"90%",
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius:20,
        alignItems:"center",
        flexDirection:"row",
        marginLeft:"5%",
        marginTop:"5%",
    },
    text: {
        fontSize:25,
        color:"#FFF",
        fontWeight:"bold",
        marginLeft:"7%",
        marginTop:"5%"
    },
    place_text: {
        flex: 1,
        fontSize:20,
        color:"#FFF",
        marginLeft:"5%",
    },
    code_text: {
        flex: 1,
        fontSize:20,
        color:"#FFF",
        marginLeft:"5%",
    },
    backdrop: {
        width: '100%',
        height: '100%',
    }
})
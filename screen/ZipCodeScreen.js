import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = (place, code) => (
    <View style = {styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
)
export default function ZipCodeScreen() {
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item}/>}
        />
    )
}

const styles = StyleSheet.create ({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})
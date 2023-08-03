import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


const backgroundImage = require('../assets/recipe.jpg')

const Paywall = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={backgroundImage} style={styles.image} />
            <View style={styles.heading}>
            <Text style={styles.text}>Unlock all Recipes</Text>
            <Text style={styles.subText}>Get unlimited access to 1000+ recipes</Text>
            </View>
        </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 200,
        width: '100%',
    },
    image: {
        resizeMode: 'cover',
        opacity: 0.5,
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    heading: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
    },
    subText: {
        fontSize: 18,
        color: '#333',
        overflow: 'hidden'
    },
    indicator: {
        justifyContent: 'center',
        flex: 1
    }
});

export default Paywall;


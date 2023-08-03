import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
            <View style={styles.content}>
                {children}
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 5,
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        margin: 6
    },
    content: {
        paddingVertical: 16,
        paddingHorizontal: 20
    }
})

export default Card;
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, StyleSheet, Text, FlatList, Button, ActivityIndicator } from "react-native";
import getRecipes from "../data/recipe"
import Card from '../components/card'
import { getAvailablePurchases } from "react-native-iap";
import { constants } from "../utils/constants";

const Home = ({ navigation }) => {

    const [recipes, setRecipes] = useState([]);
    const [isPremiumUser, setPremiumUser] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(
            () => {
                if (isPremiumUser) {
                    setRecipes(getRecipes())
                } else {
                    setRecipes(getRecipes(3))
                }
            }, [isPremiumUser]
        )

    );

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            const getPurchase = async () => {
                try {
                    const result = await getAvailablePurchases();
                    const hasPurchased = result.find((product) => product.productId === constants.productSkus[0]);
                    setLoading(false);
                    setPremiumUser(hasPurchased);
                }
                catch (error) {
                    console.error('Error occurred while fetching purchases', error);
                }
            }
    
            getPurchase();
    
        }, [])
    )

    const clickHandler = (id) => {
        navigation.navigate('Recipe-detail', {
            id: id,
        })
    }

    const onNavigate = () => {
        navigation.navigate('Paywall')
    }

    return (
        <View style={styles.container}>
            {!isLoading ? (
                <>
                    <FlatList
                        data={recipes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Card onPress={() => clickHandler(item.id)}>
                                <Text style={styles.item}>{item.name}
                                </Text>
                            </Card>)}
                    />
                    {!isPremiumUser && <View style={styles.button}>
                        <Button
                            onPress={onNavigate}
                            title='Unlock All Recipes'
                            color='coral' />
                    </View>}
                </>
            )
                : <View style={styles.indicator}>
                    <ActivityIndicator size='large' />
                    </View>
                    }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 10
    },
    item: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333'
    },
    button: {
        marginTop: 20
    },
    indicator: {
        alignSelf: 'center',
        flex: 1
    }
});


export default Home;


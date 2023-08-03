import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import getRecipes from "../data/recipe";


const RecipeDetail = ({ route, navigation }) => {

    const { id } = route.params;

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipes = getRecipes();
        const result = recipes.find((recipe) => recipe.id == id);
        setRecipe(result);
        navigation.setOptions({
            title: result.name
        })

    }, [])

    return (
        <ScrollView style={styles.container}>
            {
                recipe ?
                <View style={styles.content}>
                <Text style={styles.header}>Ingredients</Text>
                {recipe.ingredients.map((item, index) => (
                    <Text style={styles.text} key={index}>{item}</Text>
                ))}
                <Text style={{ ...styles.header, marginTop: 10 }}>Cooking Directions</Text>
                <Text style={styles.text}>{recipe.directions}</Text>
            </View>:
            <ActivityIndicator />
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 20
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify'
    }

});

export default RecipeDetail;


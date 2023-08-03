import { Platform } from "react-native"

const productSkus = Platform.select({
    android: [
        'recipe_app_premium'
    ]
})

export const constants = {
    productSkus
};
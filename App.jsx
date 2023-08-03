
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Paywall from './src/screens/paywall';
import RecipeDetail from './src/screens/recipeDetail';
import {
  initConnection,
  endConnection,
  flushFailedPurchasesCachedAsPendingAndroid,
} from 'react-native-iap';
import { Platform } from 'react-native';


const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {

    const init = async () => {
      try {
        await initConnection();

        if (Platform.OS === 'android') {
          flushFailedPurchasesCachedAsPendingAndroid();
        }
      }
      catch (error) {
        console.error('Error occurred during initilization', error.message);
      }
    }

    init();

    return () => {
      endConnection();
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'coral'
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen name='Home' component={Home} options={{ title: 'Recipes' }} />
        <Stack.Screen name='Recipe-detail' component={RecipeDetail} />
        <Stack.Screen name='Paywall' component={Paywall} options={{ title: 'Upgrade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;

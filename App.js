import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import {colors} from './src/theme/colors';
import {spacing} from './src/theme/spacing';
import {typography} from './src/theme/typography';

import Text from './src/components/Text/Text';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Spartan-Light': require('./assets/fonts/Spartan-Light.ttf'),
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

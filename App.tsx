/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import HomeScreen from './src/screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Home">
        {/* {isLoggedIn ? ( */}
          <Stack.Screen name="Home" component={HomeScreen} />
        {/* ) : ( */}
          <Stack.Screen name="SignIn" component={SignIn} />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App;
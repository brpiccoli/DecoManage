import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import PhotoUploadScreen from './screens/PhotoUploadScreen'
import StatusUpdateScreen from './screens/StatusUpdateScreen'
import TransactionManagementScreen from './screens/TransactionManagementScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login Screen">
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Status Update" component={StatusUpdateScreen} />
        <Stack.Screen name="Upload Photos" component={PhotoUploadScreen} />
        <Stack.Screen
          name="Transaction Management"
          component={TransactionManagementScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

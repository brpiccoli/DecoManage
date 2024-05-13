import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StatusUpdateScreen from "./screens/StatusUpdateScreen";
import PhotoUploadScreen from "./screens/PhotoUploadScreen";
import TransactionManagementScreen from "./screens/TransactionManagementScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Status Update" component={StatusUpdateScreen} />
        <Stack.Screen name="Upload Photos" component={PhotoUploadScreen} />
        <Stack.Screen
          name="Transation Management"
          component={TransactionManagementScreen}
        />
        <Stack.Screen
          name="Manage Transactions"
          component={TransactionManagementScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

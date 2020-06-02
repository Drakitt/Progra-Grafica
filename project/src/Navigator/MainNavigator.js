import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/Register/Register';
import AppScreen from '../View/App/AppScreen';
import Colors from '../Config/Colors';
import SettingScreen from '../View/Setting/SettingScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerScreen=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='App'
        component={AppScreen}
        options={{
          title: 'App Main',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
}
const mainNavigator=() =>{
  const [isLogged,setIsLogged]=React.useState(null);
  return (
    <NavigationContainer>
      {isLogged !== null ? (
        <StackScreen />
      ) : (
        <DrawerScreen />
      )}
    </NavigationContainer>
  );
}
export default mainNavigator;
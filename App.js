import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Feed} from './src/screens/Feed';
import {Detalle} from './src/screens/Detalle';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#3C68A9'},
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Detalle"
            component={Detalle}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#3C68A9'},
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

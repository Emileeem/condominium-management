import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index  from './Index';
import { UtilsContext } from './Context';
import { useState } from 'react';

export default function App() {
  const [utils, setUtils] = useState({})
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{utils, setUtils}}>
        <Stack.Navigator>
          <Stack.Screen name="Index" options={{headerShown: false}} component={Index}/>
          {/* <Stack.Screen name="" options={{title: 'Histórico:'}} component={}/> */}
        </Stack.Navigator>  
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

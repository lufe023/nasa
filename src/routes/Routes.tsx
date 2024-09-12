import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParams } from '../types';
import Home from '../views/Home';
import Detail from '../views/Detail';

const Stack = createNativeStackNavigator<RootStackParams>()
const roteScreenDefaultOptions = {
    headerStyle:{
        backgroundColor: 'rgba(7,26,93,255)',

    },
    headerTitleStyle: {
        color: '#fff'
    }
}
const Routes = () =>
   (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            component={Home} 
            options={roteScreenDefaultOptions}/>
            <Stack.Screen name='Detail' component={Detail} 
            options={roteScreenDefaultOptions}/>
        </Stack.Navigator>
    </NavigationContainer>
  )

export default Routes
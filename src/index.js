import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './navigators/AppNavigator'
//import * as FirebaseService from '../src/services/FirebaseService'

const AppStack = () => {
    //FirebaseService.useCallPermission()

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}

export default AppStack
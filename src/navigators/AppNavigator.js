import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TextStyle } from '../styles'
import HomeScreen from '../screen/HomeScreen/screen'
import ProfileScreen from '../screen/ProfileScreen/screen'

const Stack = createStackNavigator()

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Home Screen',
                    headerTitleStyle: {
                        fontWeight: TextStyle.FONT_WEIGHT_BOLD,
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: 'Profile Screen',
                    headerTitleStyle: {
                        fontWeight: TextStyle.FONT_WEIGHT_REGULAR,
                    },
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}
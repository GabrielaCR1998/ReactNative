import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Casa from '../Screens/Casa';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import ConScreen from '../Screens/ConScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Casa"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
           <Tab.Screen
                name="Casa"
                component={Casa}
                options={{
                    headerShown:false,
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home-outline"} size={20} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Github"
                component={SettingsScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:"Github",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-logo-github"} size={20} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Programar"
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:"Programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-code-outline"} size={20} color={color}/>
                    )
                }}
            
            />

            <Tab.Screen
                name="ConScreen"
                component={ConScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:"ConScreen",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-body"} size={20} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Sobre Mi"
                component={AboutScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />

            
            
        </Tab.Navigator>
    )
}
import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from "./screens/SearchScreen";
import PlaceScreen from "./screens/PlaceScreen";

const StackNavigator = () => {
  const bottom = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function MyTabs() {
    return (
      //quản lí tất cả các màng hình con nằm bên trong nó
      <bottom.Navigator>
        <bottom.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
         
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={26} color="black" />
              ) : (
                <AntDesign name="home" size={26} color="black" />
              ),
          }}
        />

        <bottom.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",//TÊN NẰM BÊN DƯỚI CÁC BOTTOM
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={26} color="black" />
              ) : (
                <AntDesign name="hearto" size={26} color="black" />
              ),
          }}
        />

        <bottom.Screen
          name="BookingScreen"
          component={BookingScreen}
          options={{
            tabBarLabel: "Boodings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications-sharp" size={27} color="black" />
              ) : (
                <Ionicons name="notifications-outline" size={27} color="black" />
              ),
          }}
        />

        <bottom.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user-alt" size={26} color="black" />
              ) : (
                <FontAwesome5 name="user" size={26} color="black" />
              ),
          }}
        />
      </bottom.Navigator>
    );
  }

  //Dưới này dùng để cho mỗi Screen dùng để chuyển tab khi bấm vào các nút TouchableOpacity,button ,...
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}} />
        <Stack.Screen name="PlaceScreen" component={PlaceScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

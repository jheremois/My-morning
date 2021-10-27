import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDayRoutes from '@src/screens/myDay/MyDay.routes';
import { Tasks } from '@src/screens/Tasks';

const icons: any = ["partly-sunny-sharp", "ios-add-circle-sharp"];
const getTemplateIcon = (focused: boolean, pos: number) => {
    return (<Ionicons name={icons[pos]} size={25} color={focused ? "#f0f0f0" : "#f0f0f070"} />);
};
const setIcons = (iconsPost: number) => {
    return {
        tabBarIcon: (prop: any) => getTemplateIcon(prop.focused, iconsPost),
    };
};

const Tap = createBottomTabNavigator()
function MainRoutes() {
    return (
      <NavigationContainer>
          <Tap.Navigator 
            initialRouteName="Home"
            screenOptions={{
              tabBarStyle: { position: 'absolute', backgroundColor: '#151515', height: 55, paddingVertical: 5, borderTopColor: '#f0f0f020',},
              tabBarItemStyle: {justifyContent: 'center', alignItems: 'center'},
              tabBarLabelStyle: {marginBottom: 5,},
              headerShown: false,
              tabBarActiveTintColor: '#f0f0f8', 
              tabBarInactiveBackgroundColor: 'f0f0f880', 
              tabBarBackground: (()=> <View style={{height: 90, padding: 20,}}></View>),
            }}
          >
              <Tap.Screen name="My day" component={MyDayRoutes} options={setIcons(0)} />
              <Tap.Screen name="Tasks" component={Tasks} options={setIcons(1)} />
          </Tap.Navigator>
      </NavigationContainer>
    )
}

export default MainRoutes
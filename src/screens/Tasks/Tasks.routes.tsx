import React from 'react'
import { PenddingTasks } from './PenddingTasks';
import { DoneTasks } from './DoneTaks';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from 'react-native';

const icons: any = ["square", "checkbox"];
const getTemplateIcon = (focused: boolean, pos: number) => {
    return (<Ionicons name={icons[pos]} size={25} color={focused ? "#f0f0f0" : "#f0f0f070"} />);
};
const setIcons = (iconsPost: number) => {
    return {
        tabBarIcon: (prop: any) => getTemplateIcon(prop.focused, iconsPost),
    };
};

const Tap = createBottomTabNavigator()

function TasksRoutes() {
    return (
      <Tap.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { position: 'absolute', backgroundColor: '#151515', borderColor: '#f0f0f020', borderTopColor: '#f0f0f020', top: 0, borderTopWidth: 0, height: 60, width: Dimensions.get('window').width},
          tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' },
          tabBarLabelStyle: { fontSize: 0, width: "100%",  borderBottomColor: '#f0f0f0', borderBottomWidth: 2,},
          headerShown: false,
          tabBarActiveTintColor: '#f0f0f8', 
        }}
      >
          <Tap.Screen name="Pendding" component={PenddingTasks} options={setIcons(0)} />
          <Tap.Screen name="Done" component={DoneTasks} options={setIcons(1)} />
      </Tap.Navigator>
    )
}

export default TasksRoutes
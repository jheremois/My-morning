import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PenddingTasks } from './PenddingTasks';
import { DoneTasks } from './DoneTaks';

const Stack = createNativeStackNavigator();

function TasksRoutes() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="pendding" component={PenddingTasks} />
            <Stack.Screen name="done" component={DoneTasks} />
      </Stack.Navigator>
  );
}

export default TasksRoutes
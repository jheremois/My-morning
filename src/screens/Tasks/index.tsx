import React from "react";
import { View, Text } from "react-native";
import ConectionVer from "@src/components/ConectionVer";

export function Tasks() {
    return (
      <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#515151', justifyContent: 'center', alignItems: 'center',}}>
        <ConectionVer/>
        <Text style={{color: '#f0f0f0', fontWeight: 'bold', fontSize: 19,}}>
          Dev
        </Text>
      </View>
    );
}
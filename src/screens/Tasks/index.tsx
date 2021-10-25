import React from "react";
import { View, Text } from "react-native";
import MainContainer from "@src/components/MainContainer";

export function Tasks() {
    return (
      <MainContainer>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#f0f0f0'}}>Actions</Text>
        </View>
      </MainContainer>
    );
}
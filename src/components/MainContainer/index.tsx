import React from "react";
import {ScrollView, View, Text} from 'react-native';


const MainContainer = ({children}: any)=>{

    return(
        <ScrollView 
            style={{ flex: 1, paddingHorizontal: 20, marginBottom: 55,  backgroundColor: '#212121'}}
        >
            {children}
        </ScrollView>
    )
}

export default MainContainer
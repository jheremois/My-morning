import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, Pressable, Linking } from "react-native";
import styles from "./styles";


const FloatButon = ()=>{
    return(
        <View style={styles.floatContainer}>
            <Pressable style={styles.floatButon}>
                <Text style={styles.floatButonText}>
                    +
                </Text>
            </Pressable>
        </View>
    )
}

export default FloatButon
import React from "react";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

const Card = ({children, bg, load, loadbg, icon, action }: any)=>{

    return(
        <LinearGradient
            colors={bg}
            style={styles.card}>
                {
                    load
                    ?   
                        <ActivityIndicator size="large" color={loadbg}/>
                    : 
                        <View>
                            {children}
                            <View style={styles.moreLink}>
                                <Pressable style={styles.moreLinkPress} onPress={action}>
                                    <Ionicons name={icon} color="#ffffff90"/>
                                    <Text style={styles.moreLinkPressText}>
                                        More
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                }
        </LinearGradient>
    )
}

export default Card
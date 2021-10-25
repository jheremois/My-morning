import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, FlatList, Pressable, Linking, Button, Alert } from "react-native";
import styles from "./styles";
import Card from "../Card";
import axios from "axios";
import { getPlaylist } from "@src/services/spotify.api";

const PlaylistCard = ({navigation}: any)=>{
    
    const [loading, setLoading]: any = useState(false)
    
    const sendCrytos = async ()=>{
        
        setLoading(true)

        console.log(getPlaylist().items)

        setLoading(false)    
    
    }            

    useEffect(()=>{        
        sendCrytos()
    }, [])

    const CritoIcon = ( {item}: any )=>{
        return(
            <Pressable style={styles.crypCard} onPress={(e)=> Linking.openURL(`https://open.spotify.com/playlist/${item.id}?si=60e4abdee8634b21`)}>
                <View style={styles.crypCardimgCont}>
                    <Image style={styles.crypCardimg} source={{uri: item.images[0].url}}/>
                </View>
                <View>
                    <Text style={styles.crypCardText}>
                        {item.name}
                    </Text>
                </View>
            </Pressable>
        )
    }

    const supportedURL = ``;

    return(
        <Card bg={['#18181870', '#18181890']} load={loading} loadbg={'#ffffff90'} icon={'cash'} action={(e: any)=> console.log(e)}>
            <View style={styles.cardIn}>
                <FlatList
                    data={getPlaylist().items}
                    renderItem={CritoIcon}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={(130 + 10) * 2}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    centerContent={true}
                    fadingEdgeLength={30}
                    refreshing={true}
                ></FlatList>
                    
            </View>
        </Card>
    )

}

export default PlaylistCard
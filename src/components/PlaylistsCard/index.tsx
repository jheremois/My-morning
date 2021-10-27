import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, FlatList, Pressable, Linking, Button, Alert } from "react-native";
import styles from "./styles";
import Card from "../Card";
import axios from "axios";
import { getPlaylist, getAllPlaylists } from "@src/services/spotify.api";

const PlaylistCard = ({navigation}: any)=>{
    
    const [loading, setLoading]: any = useState(false)
    const [playls, setPlayls]: any = useState([''])
    
    const sendCrytos = async ()=>{
        
        setLoading(true)

        await getAllPlaylists().then( async (response:any)=> {
            setPlayls(response.data)
        }).catch(function (error: any) {
            console.error(error)
        })

        setLoading(false)    
    
    }            

    useEffect(()=>{        
        sendCrytos()
        console.log(playls)
    }, [])

    
    const playlistItem = ( {item}: any )=>{
        return(
            <Pressable style={styles.crypCard} onPress={(e)=> Linking.openURL(`https://open.spotify.com/playlist/${item.id}?si=60e4abdee8634b21`)}>
                <View style={styles.crypCardimgCont}>
                    <Image style={styles.crypCardimg} source={{uri: item.images}}/>
                </View>
                <View>
                    <Text style={styles.crypCardText}>
                        {item.name}
                    </Text>
                </View>
            </Pressable>
        )
    }

    return(
        <Card bg={['#18181870', '#18181890']} load={loading} loadbg={'#ffffff90'} icon={'play'} action={(e: any)=> console.log(e)}>
            <View style={styles.cardIn}>
                <FlatList
                    data={playls}
                    renderItem={playlistItem}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={(130 + 10) * 2}
                    horizontal={true}
                    keyExtractor={item => item.id + item.href}
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
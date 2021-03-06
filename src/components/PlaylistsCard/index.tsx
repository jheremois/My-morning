import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, Pressable, Linking } from "react-native";
import styles from "./styles";
import Card from "../Card";
import { getAllPlaylists } from "@src/services/playlists.api";

const PlaylistCard = ()=>{
    
    const [playls, setPlayls]: any = useState([''])
    const [loading, setLoading]: any = useState(false)
    
    const sendPlaylists = async ()=>{
        
        setLoading(true)

        await getAllPlaylists().then( async (response:any)=> {
            setPlayls(response.data.sort((a: any, b: any) => (a.id > b.id) ? -1 : ((b.id > a.id) ? +1 : 0)))
        }).catch(function (error: any) {
            console.error(error)
        })

        await setLoading(false)    
    
    }            

    useEffect(()=>{        
        sendPlaylists()
    }, [])

    
    const playlistItem = ( {item}: any )=>{
        return(
            <Pressable style={styles.plCard} onPress={()=> Linking.openURL(`https://open.spotify.com/playlist/${item.id}?si=60e4abdee8634b21`)}>
                <View style={styles.plCardimgCont}>
                    <Image style={styles.plCardimg} source={{uri: item.images}}/>
                </View>
                <View>
                    <Text style={styles.plCardText}>
                        {item.name}
                    </Text>
                </View>
            </Pressable>
        )
    }

    return(
        <Card bg={['#18181870', '#18181890']} load={loading} loadbg={'#ffffff90'} icon={'play'} action={ ()=> Linking.openURL(`https://open.spotify.com?si=60e4abdee8634b21`) }>
            <View style={styles.cardIn}>
                <FlatList
                    data={ playls }
                    renderItem={playlistItem}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={(130 + 10) * 2}
                    horizontal={true}
                    keyExtractor={item => item.id + '/' + item.href}
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
import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import Card from "../Card";
import { getCryptoValue } from "@src/services/crypto.api";

const CryptoCard = ()=>{
    
    const [loading, setLoading]: any = useState(false)
    const [cryptos, setCryptos]: any = useState([])
    
    const sendCrytos = async ()=>{
        
        setLoading(true)

        await getCryptoValue().then( async (response:any)=> {
            setCryptos(response.data)
        }).catch(function (error: any) {
            console.error(error)
        })

        setLoading(false)    
    
    }            

    useEffect(()=>{        
        sendCrytos()
    }, [])

    const CritoIcon = ( {item}: any )=>{
        return(
            <View style={styles.crypCard}>
                <View style={styles.crypCardimgCont}>
                    <Image style={styles.crypCardimg} source={{uri: item.image}}/>
                </View>
                <View>
                    <Text style={styles.crypCardText}>
                        {item.name}
                    </Text>
                    <Text style={styles.crypCardTextPrice}>
                        ${item.current_price} 
                    </Text>
                </View>
            </View>
        )
    }

    return(
        <Card bg={['#282F4480', '#282F4420']} load={loading} loadbg={'#ffffff90'} icon={'cash'} action={(e: any)=> console.log(e)}>
            <View style={styles.cardIn}>
                <FlatList
                    data={cryptos}
                    renderItem={CritoIcon}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={(130 + 10) * 2}
                    horizontal={true}
                    keyExtractor={item => item.id + '/' +item.ath}
                    showsHorizontalScrollIndicator={false}
                    centerContent={true}
                    fadingEdgeLength={30}
                    refreshing={true}
                ></FlatList>
                    
            </View>
        </Card>
    )

}

export default CryptoCard
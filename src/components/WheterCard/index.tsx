import React, { useEffect, useState } from "react";
import { View, Text, Image, Linking } from "react-native";
import styles from "./styles";
import Card from "../Card";
import { getWeather } from "@src/services/weather.api";

const WeatherCard = ({navigation}: any)=>{
    
    const [weather, setWeather]: any = useState({city: 'La Romana', logo: '', temper: 24, weatherM: 'Thunderstrorm'})
    const [loading, setLoading]: any = useState(false)
    
    const sendWeather = ()=>{
        
        setLoading(true)

        getWeather().then( async (response:any)=>{
            const weatherItems = {
                city: response.data.location.name,
                logo: response.data.current.condition.icon,
                temper: response.data.current.temp_c,
                weatherM: response.data.current.condition.text
            }
            
            await setWeather(weatherItems)
  
        }).catch(function (error) {
            console.error(error)
        })
        setLoading(false)    

    }            

    useEffect(()=>{        
        sendWeather()
    }, [])

    return(
        <Card bg={['#364F6B90', '#3FC1C980']} load={loading} loadbg={'#ffffff90'} icon={'cloud'} action={()=> Linking.openURL(`https://bit.ly/3pGy0Vy`)}>
            <View style={styles.cardIn}>
                <View style={styles.city}>
                    <View style={styles.myCity}>
                        <Text style={styles.cityText}>
                            {weather.city}
                        </Text>
                        <Image
                            style={ {height: 30, width: 30, marginLeft: 8} }
                            source={ {uri: `https://${weather.logo}`} }
                        />
                    </View>
                    <Text style={styles.weath}>
                        {weather.weatherM}
                    </Text>
                </View>
                <View style={styles.temp}>
                    <Text style={styles.tempText}>
                        {weather.temper}°
                    </Text>
                </View>
            </View>
        </Card>
    )
}

export default WeatherCard
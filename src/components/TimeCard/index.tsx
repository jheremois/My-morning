import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Card from "../Card";
import { monthName, weekday} from "@src/models/models";
const date = new Date();


const TimeCard = ({navigation}: any)=>{

    const [loading, setLoading] = useState(false)
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        day: '',
        month: '',
        date: 0
    })

    const getDateTime = () =>{

        let d = new Date();
        let m = new Date().getMonth() + 1
        let day = weekday[d.getDay()]
        let month = monthName[m]
    
        setLoading(true)
    
        let timer = setInterval(() => {
            const date = new Date();
    
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                day: day,
                month: month,
                date: new Date().getDate(),
            });
        }, 1000);
    
        setLoading(false)                    
    
        return () => clearInterval(timer)

    }

    useEffect(() => {
        getDateTime()
    }, [])  

    return(
        <Card bg={['#3B5F4190', '#66A96B80']} load={loading} loadbg={'#ffffff90'} icon={'time'} action={(e: any)=> console.log(e)}>
            <View style={styles.cardIn}>
                <View style={styles.time}>
                    <Text style={styles.timeText}>
                    {dateTime.hours}:{dateTime.minutes}
                    </Text>
                    <Text style={styles.smal80}>
                        {dateTime.day}
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={styles.timeText}>
                        {dateTime.date}
                    </Text>
                    <Text style={styles.smal80}>
                        {dateTime.month}
                    </Text>
                </View>
            </View>
        </Card>
    )
}

export default TimeCard
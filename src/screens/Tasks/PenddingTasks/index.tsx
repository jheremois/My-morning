import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import ConectionVer from "@src/components/ConectionVer";
import { getPenddingTasks, putDoneTasks } from "@src/services/tasks.api";
import styles from "./styles";
import FloatButon from "@src/components/FloatBut";
import { format, render, cancel, register } from 'timeago.js';

export function PenddingTasks({navigation}: any) {
    const [tasks, setTasks]: any = useState([''])
    const [load, setLoad] = useState(false)
    const [loading, setLoading]: any = useState(false)

    const sendTasks = async ()=>{
        
        setLoading(true)

        await getPenddingTasks().then(async (res)=>{
            await setTasks(res.data)
        }).then(setLoading(false)).catch((err)=>{
            console.log(err)
        })
 
    }   

    useEffect(()=>{        
        sendTasks()
    }, [tasks])

    
    const taskIntem = ( {item}: any )=>{

        return(

            <View style={styles.task}>
                {load
                    ?
                        <ActivityIndicator size="large" color={'#f0f0f0'}/>
                    :
                        <View>
                            <View style={{paddingVertical: 10, minHeight: 60,}}>
                                <Text style={{color: '#f0f0f0',}}>
                                    {item.task}
                                </Text>
                            </View>
                            <View style={styles.taksActions}>
                                <Text style={styles.taksActionsText}>
                                    {format(item.upload_date)}
                                </Text>
                                <CheckBox
                                value={item.taskDone}
                                onValueChange={()=> setTimeout(() => {
                                    setLoad(true)
                                    putDoneTasks(item.id).then(
                                        async ()=> await setLoad(false)
                                    )
                                }, 900)}
                                tintColors={{ true: '#f0f0f0', false: '#f0f0f070' }}
                                style={{}}
                                />
                            </View>
                        </View>
                }
            </View>
        )
    }

    return(
        loading
            ?
            <View style={styles.container}>
                <ActivityIndicator size="large" color={'#f0f0f0'}/>
            </View>
            :
            <View style={styles.container}>
                <ConectionVer/>
                <View>
                    <FlatList
                        data={tasks}
                        showsVerticalScrollIndicator={false}
                        renderItem={taskIntem}
                        keyExtractor={item => item.id + '/task'}
                        showsHorizontalScrollIndicator={false}
                        centerContent={true}
                        fadingEdgeLength={15}
                        refreshing={true}
                    ></FlatList>    
                    <FloatButon/>
                </View>
            </View>
    )

}
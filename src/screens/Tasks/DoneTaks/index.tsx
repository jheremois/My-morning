import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable } from "react-native";
import ConectionVer from "@src/components/ConectionVer";
import { getDoneTasks, putDoneTasks, deleteTasks } from "@src/services/tasks.api";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';

export function DoneTasks() {
    const [tasks, setTasks]: any = useState([''])
    const [load, setLoad] = useState(false)
    const [loading, setLoading]: any = useState(false)

    const sendTasks = async ()=>{
        
        setLoading(true)

        await getDoneTasks().then(async (res)=>{
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
                {
                    load
                    ?
                        <ActivityIndicator size="large" color={'#f0f0f0'}/>
                    :
                        <View>
                            <View style={{paddingVertical: 10, minHeight: 60,}}>
                                <Text style={{color: '#f0f0f060', textDecorationLine: 'line-through'}}>
                                    {item.task}
                                </Text>
                            </View>
                            <View style={styles.taksActions}>
                                <Pressable style={{padding: 5,}} onPress={
                                    async ()=> {
                                        setLoad(true)
                                        putDoneTasks(item.id).then(
                                            async ()=> await setLoad(false)
                                        )
                                    }
                                }>
                                    <Ionicons name="arrow-undo" size={22} color="#f0f0f070" />
                                </Pressable>
                                <Pressable style={{padding: 5,}} onPress={
                                    async ()=> {
                                        setLoad(true)
                                        deleteTasks(item.id).then(
                                            async ()=> await setLoad(false)
                                        )
                                    }
                                }>
                                    <Ionicons name="trash-outline" size={22} color="#f0f0f080" />
                                </Pressable>
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
                </View>
            </View>
    )

}
import React, {useState, useEffect} from "react";
import { View, Text, FlatList, Pressable, ActivityIndicator, Dimensions } from "react-native";
import ConectionVer from "@src/components/ConectionVer";
import { getDoneTasks } from "@src/services/tasks.api";

export function DoneTasks( { navigation }: any ) {
    const [tasks, setTasks]: any = useState([''])
    const [loading, setLoading]: any = useState(false)

    const sendTasks = async ()=>{
        
        setLoading(true)

        await getDoneTasks().then((res)=>{
            setTasks(res.data)
        }).catch((err)=>{
            console.log(err)
        })

        await setLoading(false)  
    }   

    useEffect(()=>{        
        sendTasks()
    }, [])

    
    const taskIntem = ({item}: any, )=>{
        return(
            <View style={{backgroundColor: '#51515180', width: Dimensions.get('window').width - 40, borderRadius: 10, marginVertical: 10, paddingHorizontal: 20, paddingVertical: 5, minHeight: 110,}}>
                <Pressable>
                    <Text style={{color: '#f0f0f0'}}>
                        ...
                    </Text>
                </Pressable>
                <View style={{paddingVertical: 10,}}>
                    <Text style={{color: '#f0f0f0',}}>
                        {item.task}
                    </Text>
                </View>
            </View>
        )
    }

    return(
        loading
            ?
            <View style={{ paddingHorizontal: 20, flex: 1, height: '100%', width: '100%', backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', paddingBottom: 55}}>
                <ActivityIndicator size="large" color={'#f0f0f0'}/>
            </View>
            :
            <View style={{ paddingHorizontal: 20, flex: 1, height: '100%', width: '100%', backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', paddingBottom: 55}}>
                <ConectionVer/>
                <View>
                    <FlatList
                        ListHeaderComponent={
                            <View style={{backgroundColor: '#212121', width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                                <Pressable onPress={() => navigation.navigate('pendding')}>
                                    <Text style={{color: '#f0f0f080', fontWeight: 'bold', fontSize: 24, paddingVertical: 10, textAlign: 'center'}}>
                                        Pendding Tasks 
                                    </Text>
                                </Pressable>
                                <Text style={{color: '#f0f0f0', fontWeight: 'bold', fontSize: 24, paddingVertical: 10, textAlign: 'center', }}>
                                    Done Tasks
                                </Text>
                            </View>
                        }
                        stickyHeaderIndices={[0]}
                        data={tasks}
                        showsVerticalScrollIndicator={false}
                        renderItem={taskIntem}
                        keyExtractor={item => item.id + '/task'}
                        showsHorizontalScrollIndicator={false}
                        centerContent={true}
                        fadingEdgeLength={30}
                        refreshing={true}
                    ></FlatList>    
                </View>
            </View>
    )

}
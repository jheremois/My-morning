import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import { View, Text, FlatList, ActivityIndicator, Dimensions } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import ConectionVer from "@src/components/ConectionVer";
import { getPenddingTasks, putDoneTasks } from "@src/services/tasks.api";
import styles from "./styles";
import { format } from 'timeago.js';
import TaskAdder from "@src/components/TasksAdder";
import { CreateTask } from "@src/services/tasks.api";

export function PenddingTasks() {
    const [tasks, setTasks]: [any, Dispatch<SetStateAction<any>>] = useState([''])
    const [task, setTask] = useState<string>('')
    const [load, setLoad]= useState<boolean>(false)
    const [loading, setLoading]: any  = useState<boolean>(false)


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

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
                        <View style={{zIndex: 999}}>
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

    
    const postTask = ()=>{
        CreateTask(task).then(()=>{
            setTask('')
            setModalVisible(!isModalVisible);
        }).catch((err)=>{
            console.log(err)
        })
    } 

    return(
        loading
            ?
            <View style={styles.container}>
                <ActivityIndicator size="large" color={'#f0f0f0'}/>
            </View>
            :
            <View style={[styles.container]}>
                <ConectionVer/>
                <View style={{minHeight: Dimensions.get('screen').height - 150, width: '100%',}}>
                    <FlatList
                        data={tasks.sort((a: any, b: any) => (a.id > b.id) ? -1 : ((b.id > a.id) ? +1 : 0))}
                        showsVerticalScrollIndicator={false}
                        renderItem={taskIntem}
                        keyExtractor={item => item.id + '/task'}
                        showsHorizontalScrollIndicator={false}
                        centerContent={true}
                        fadingEdgeLength={15}
                        refreshing={true}
                    ></FlatList>
                    <TaskAdder postTask={()=> postTask()} modalState={isModalVisible} modalToggle={()=> toggleModal()} taskData={task} taskSetter={setTask}/>
                </View>
                
            </View>
    )

}
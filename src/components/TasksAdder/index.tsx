import React from "react";
import { View, Text, Pressable, Dimensions, TextInput, KeyboardAvoidingView } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

const TaskAdder = ({modalState, modalToggle, taskData, taskSetter, postTask}: any)=>{

  
    return (
        <View style={{position: 'absolute', height: 80, width: 80, top: '85%', right: '0%',}}>
            <View style={styles.floatContainer}>
                <Pressable onPress={modalToggle} style={styles.floatButon}>
                    <Text style={styles.floatButonText}>
                        +
                    </Text>
                </Pressable>
            </View>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <Modal 
                    isVisible={modalState}
                    onBackdropPress={modalToggle}
                >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#212121', width: Dimensions.get('window').width - 90, borderRadius: 10, padding: 15,}}>
                        <Text style={{color: '#f0f0f0', fontSize: 17, fontWeight: '700',}}>
                            New task
                        </Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={taskSetter}
                            value={taskData}
                            autoFocus={true}
                            style={{height: 90, marginVertical: 10, backgroundColor: '#242424', borderRadius: 3, borderWidth: 0.2, padding: 10, color: '#f0f0f0',}}
                        />
                        <View style={{alignItems: 'flex-end'}}>
                        {
                            taskData.length < 5
                                ? 
                                    <Pressable onPress={()=> alert('Tasks must be at least 5 characters long')} style={{backgroundColor: '#f0f0f005', paddingVertical: 7, paddingHorizontal: 10, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 20,}}>
                                        <Text style={{fontSize: 16, color: '#f0f0f040', fontWeight: '700',}}>
                                            Save
                                        </Text>
                                    </Pressable>
                                :
                                    <Pressable onPress={postTask} style={{backgroundColor: '#f0f0f050', paddingVertical: 7, paddingHorizontal: 10, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 20,}}>
                                        <Text style={{fontSize: 16, color: '#f0f0f0', fontWeight: '700',}}>
                                            Save
                                        </Text>
                                    </Pressable>
                        }
                        </View>
                    </View>
                </View>
                </Modal>
            </KeyboardAvoidingView>
      </View>
    );
}

export default TaskAdder
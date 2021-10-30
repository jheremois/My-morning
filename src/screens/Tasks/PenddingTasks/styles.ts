import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: { 
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 60,
        width: '100%',
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 55
    },
    task: {
        minHeight: 80,
        backgroundColor: '#515151',
        width: Dimensions.get('window').width - 40,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    taksActions: {
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    taksActionsText: {
        fontSize: 13,
        color: '#f0f0f040',
    }
});

export default styles
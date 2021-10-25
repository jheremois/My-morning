import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    cardIn: {
        paddingTop: 20,
        padding: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f1f1f1',
    },
    smal80: {
        textAlign: 'center',
        color: '#ffffffaf',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default styles
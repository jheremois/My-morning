import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    city: {
        width: '60%',
        justifyContent: 'center',
    },
    cityText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffffaf',
    },
    myCity: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardIn: {
        paddingTop: 20,
        padding: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    temp: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#f1f1f1',
    },
    weathD:{
        color: '#ffffffaf',
        fontWeight: 'bold',
    },
    weath: {
        color: '#f0f0f0',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 26,
    },
});

export default styles
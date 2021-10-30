import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    cardIn: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    plCard: {
        borderRadius: 2,
        padding: 10,
        height: 215,
        width: 160,
        backgroundColor: '#18181880',
        margin: 5,
        marginHorizontal: 10,
    },
    plCardimgCont: {
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plCardimg: {
        height: 140,
        width: 140,
    },
    plCardText: {
        overflow: 'scroll',
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: '#fdfdfc',
    }
    
});

export default styles
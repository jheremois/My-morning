import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    cardIn: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    crypCard: {
        height: 190,
        width: 130,
        padding: 20,
        backgroundColor: '#181a20',
        borderRadius: 10,
        margin: 5,
    },
    crypCardimgCont: {
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    crypCardimg: {
        borderRadius: 90,
        height: 80,
        width: 80,
    },
    crypCardText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    crypCardTextPrice: {
        marginTop: 3,
        textAlign: 'center',
        color: '#fcd535',
    }
    
});

export default styles
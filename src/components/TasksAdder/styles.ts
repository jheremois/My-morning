import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    floatContainer: {
        top: 0,
        height: 80,
        marginBottom: 90,
        position: 'absolute',
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatButon: {
        position: 'absolute',
        zIndex: 999999,
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 920,
        height: 65,
        width: 65,
        borderWidth: 2,
        borderColor: '#f0f0f010',
        shadowColor: "#515151",
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 9,
        shadowRadius: 10,
        elevation: 10
    },
    floatButonText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#f0f0f0',
    }
})

export default styles
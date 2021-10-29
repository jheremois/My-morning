import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    floatContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: Dimensions.get('screen').width - 30,
    },
    floatButon: {
        position: 'absolute',
        zIndex: 999,
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 920,
        top: -90,
        height: 65,
        width: 65,
        borderWidth: 1,
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
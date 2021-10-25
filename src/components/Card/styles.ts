import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    card: {
        marginVertical: 15,
        shadowColor: "#000",
        elevation: 6,
        minHeight: 130,
        justifyContent: 'center',
        backgroundColor: '#515151',
        width: '100%',
        borderRadius: 18,
        padding: 10,
    },
    moreLink: {
        paddingTop: 10,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    moreLinkPress: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreLinkPressText: {
        paddingLeft: 5,
        color: '#ffffff90',
    }
});

export default styles
import { StyleSheet, View, Text } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    title: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

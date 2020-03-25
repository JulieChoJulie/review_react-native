import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation }) => {
    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
        </View>
    );
};

export default ReviewDetails;
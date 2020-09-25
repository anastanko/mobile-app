import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import R from '../res/R';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        const {title, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.view}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        height: 44,
        width: 252,
        borderRadius: 22,
        backgroundColor: '#FDB000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        //flex: 1,
    },
});
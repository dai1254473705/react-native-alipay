/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


export default class App extends Component<Props> {
    _aliPay = () => {
        console.log("点击进行支付");


    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._aliPay}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>支付宝支付</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btn: {
        width: 200,
        height: 30,
        backgroundColor: "#999",


    },
    text: {
        color: "#fff",
        textAlign: "center",
        lineHeight: 30
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
import Alipay from 'react-native-yunpeng-alipay';


export default class App extends Component<{}> {
    _aliPay = () => {
        console.log("点击进行支付");
        let data ="partner=\"sdfsdf\"&seller_id=\"asdfasdf@qq.com\"&out_trade_no=\"asdfasdfasdfsdfasdf\"&subject=\"asdfasdf在线支付\"&body=\"sadfasdfa在线支付\"&total_fee=\"0.01\"&notify_url=\"http://xx.xx.xx.xx/alipay/alipayCallback\"&service=\"sd.sdf.pay\"&payment_type=\"1\"&_input_charset=\"utf-8\"&it_b_pay=\"30m\"&sign=\"%%3D%3D\"&sign_type=\"RSA\"";
        Alipay.pay(data).then(function(data){
            console.log(data);
        }, function (err) {
            //没有安装支付宝APP
            console.log(err);
        });
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
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    WebView
} from 'react-native';

export default class Web extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            webViewData: ''
        }
        this.data = '我是RN传给web端的参数';
    }

    sendMessage() {
        this.refs.webview.postMessage(this.data);
    }
    callback(){

    }


    handleMessage(e) {
        this.setState({webViewData: e.nativeEvent.data});
    }


    render() {
        return (
            <View style={styles.container}>
                {/*web*/}
                <View style={{width: 375, height: 220}}>
                    <WebView
                        ref={'webview'}
                        source={require('./test.html')}
                        style={{width: 375, height: 220}}
                        onMessage={(e) => {
                            this.handleMessage(e)
                        }}
                    />
                </View>
                {/*RN*/}
                <Text>来自webview的数据 : {this.state.webViewData}</Text>
                <Text onPress={() => {
                    this.sendMessage()
                }}>
                    发送数据到WebView
                </Text>
            </View>

        )

    }

}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        marginTop: 22,

        backgroundColor: '#F5FCFF',

    },



});
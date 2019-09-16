import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from './common'
import firebase from 'firebase'
import LoginForm from './LoginForm'

export class App extends Component {
    componentDidMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyARbeWFxAlDvCtJ4Zdi3udOpIpsXlZOjiA',
            authDomain:'auth-8b150.firebaseapp.com',
            databaseURL: 'https://auth-8b150.firebaseio.com',
            projectId: 'auth-8b150',
            storageBucket: '',
            messagingSenderId: '86725670531',
            appId: '1:86725670531:web:bde33a164b36d2b09a0db6'
          })
    }
    render() {
        return (
            <View>
                <Header headerText={'Sign In'}/>
                <LoginForm />
            </View>
        )
    }
}

export default App

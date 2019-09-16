import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import {Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'


export class LoginForm extends Component {
    state={
        email:'',
        password:'',
        loading:false,
        error:''
    }

    onButtonPress(){
        const {email,password}=this.state
        this.setState({error:'',loading:true})
        setTimeout(()=> {
            
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            ()=>{this.setState({
                error:'Login Succesfull..',
                loading:false})}
        )
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(
                ()=>{
                    this.setState({error:'Account created with this credentials',
                loading:false})
                }
            )
            .catch(()=>{
                this.setState({error:'Authentication Failed',loading:false})
            });
        });
        this.setState({loading: false,error:'Timeout'})  
        }, 10000);
        
    }

    renderButton(){
        if(this.state.loading){
            return(<Spinner />);
        }            
        return(
            <Button 
                name={'Log In'}
                onPress={this.onButtonPress.bind(this)} />
            );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder='user@gmail.com'
                    label='Email'
                    value={this.state.email}
                    onChangeText={email =>this.setState({email})}
                    
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    placeholder='password'
                    label='Password'
                    value={this.state.password}
                    onChangeText={password =>this.setState({password})}
                    secureTextEntry
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                   
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm

const styles ={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}
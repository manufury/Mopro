import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

class Register extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      userName:'',
      email:'',
      address:'',
      phoneNumber:'',
    }
  }
  submit()
  {
    console.log(this.state);
  }
  render(){
    return (
      <View> 
         <Text style={{marginLeft: 10}}>Name</Text>
         <TextInput placeholder="enter name" onChangeText={(text) => {this.setState({name: text})}} 
         style={{ borderWidth: 2, marginLeft: 10, marginRight: 10}}></TextInput>
         
         <Text style={{marginLeft: 10, marginTop: 10}}>User Name</Text>
         <TextInput placeholder="enter User Name" onChangeText={(text) => {this.setState({userName: text})}} 
         style={{ borderWidth: 2,  marginLeft: 10, marginRight: 10}}></TextInput>
         
         <Text style={{marginLeft: 10, marginTop: 10}}>Email</Text>
         <TextInput placeholder="enter email" onChangeText={(text) => {this.setState({email: text})}} 
         style={{ borderWidth: 2,  marginLeft: 10, marginRight: 10}}></TextInput>
         
         <Text style={{marginLeft: 10, marginTop: 10}}>Address</Text>
         <TextInput placeholder="enter address" onChangeText={(text) => {this.setState({address: text})}} 
         style={{ borderWidth: 2,  marginLeft: 10, marginRight: 10}}></TextInput>
         
         <Text style={{marginLeft: 10, marginTop: 10}}>Phone Number</Text>
         <TextInput placeholder="enter Phone Number" onChangeText={(text) => {this.setState({phoneNumber: text})}} 
         style={{ borderWidth: 2,  marginLeft: 10, marginRight: 10, marginBottom: 10}}></TextInput>

         <Button title='Go to details' onPress={() => {this.props.navigation.navigate('Details'); this.submit(); }}></Button>
       </View>
    )
  }
}

// export default withNavigation(Register);
export default Register;
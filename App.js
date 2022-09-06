import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    symbol : "+",
    number1 : "",
    number2 : "",
    result : "",

  };
  changesymbol = () => {
    if(this.state.symbol == "+"){
      this.setState({
        symbol : "-"
      })
    }
    else if(this.state.symbol == "-"){
      this.setState({
        symbol : "x"
      })
    }
    else if(this.state.symbol == "x"){
      this.setState({
        symbol : "÷"
      })
    }
    else if(this.state.symbol == "÷"){
      this.setState({
        symbol : "+"
      })
    }
  }
  calculate = () => {
        if(this.state.symbol == "+"){
           this.setState({
            result: parseInt(this.state.number1) + parseInt(this.state.number2)})

        }
        else if(this.state.symbol == "-"){
           this.setState({
            result: parseInt(this.state.number1) - parseInt(this.state.number2)})

        }
        else if(this.state.symbol == "x"){
           this.setState({
            result: parseInt(this.state.number1) * parseInt(this.state.number2)})

        }
        else if(this.state.symbol == "÷"){
           this.setState({
            result: parseInt(this.state.number1) / parseInt(this.state.number2)})

        }
  }
 //HTML
  render() {
    return (
     <div>
     <Text style = {styles.Logo}>Crafted By Suraj With React Native</Text>
     <TextInput 
     placeholder = "Enter Number 1"
onChangeText={(number1) => this.setState({number1})}  
     style = {styles.TextInput}
     />
     <Text style = {styles.Text11} onClick = {this.changesymbol}>{this.state.symbol}</Text>
     <TextInput 
onChangeText={(number2) => this.setState({number2})}  
     placeholder = "Enter Number 2"
     style = {styles.TextInput2}
     />
     <Text style = {styles.Text11}>=</Text>
 <Pressable onPress = {this.calculate} style={styles.button11}>
      <Text style = {styles.textofbtn}>Calculate</Text>
    </Pressable>
    <Text style = {styles.Text11}>{this.state.result}</Text>
     
      </div>
    );
  }
}
export default App

const styles = StyleSheet.create({
  Text11: {
    textAlign: 'center',
    marginLeft: 'auto',
marginRight : "auto",
display : "block",
marginTop:20,
fontSize: 30
  },
  TextInput : {
    backgroundColor: 'azure',
    marginTop: 20,
    padding: 20,
fontSize: 20,
height : 40,
textAlign: 'center',
marginLeft: 'auto',
marginRight : "auto",
display : "block",
outline : "none",
borderRadius: 10

  },
  TextInput2 : {
    backgroundColor: 'azure',
    padding: 20,
fontSize: 20,
height : 40,
textAlign: 'center',
marginLeft: 'auto',
marginRight : "auto",
display : "block",
outline : "none",
marginTop : 20

  },
 button11: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 20
  },
  textofbtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  Logo : {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    fontSize:20,
    color: "grey",
    fontWeight: 500,
    marginTop: 20,
    marginBottom: 50
  }
})
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = ({
      text: "",
      displayText: ""
    })
  }
    speak = () => {
      var thingToSay = this.state.text;
      this.state.text === ''
        ? alert('Please Enter a word')
        : Speech.speak(thingToSay);
    };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={{
              text: 'Speech To Text Converter', style: {
                color: 'black',
                fontWeight: 'bold', fontSize: 20
              }
            }}
            backgroundColor={'lightblue'}
          />
          <Image style={{ width: 150, height: 150, marginLeft: 570, marginTop: 80 }}
            source={{ uri: 'https://miro.medium.com/max/1400/1*LyLWfbHfFUG_OyyGSwK-_w.png' }} />

          <TextInput
            style={styles.inputBox}
            onChangeText={info => {
              this.setState({
                text: info
              })
            }}
            value={this.state.text} />
          <TouchableOpacity style={styles.goButton} onPress={this.speak}>
            <Text style={styles.text2}> Click Here To Hear Speech </Text>
          </TouchableOpacity>
          <Text style={styles.displayText}>{this.state.displayText}</Text>
        </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 90,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  goButton: {
    marginTop: 30,
    width: '25%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
  },
});
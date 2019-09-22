import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>

        <ScrollView style={style.scrollContainer}></ScrollView>

        <View style={styles.footer}>
          <TextInput style={styles.textInput}
          placeholder='type here..'
          placeholderTextColor ='white'
          underlineColorAndroid ='transparent'
          >

          </TextInput>
        </View>
      </View>
    );
  }
}

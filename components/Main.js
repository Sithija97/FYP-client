import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}></ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="type here.."
            placeholderTextColor="#57606f"
            underlineColorAndroid="transparent"></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
  header: {
    backgroundColor: '#3c40c6',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#dcdde1',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 30,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#485460',
    padding: 20,
    backgroundColor: '#dfe4ea',
    borderTopWidth: 2,
    borderTopColor: '#ced6e0',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#40407a',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});
/*
<View style={styles.header}>
  <Text style={styles.headerText}>To-Do</Text>
</View>;
*/
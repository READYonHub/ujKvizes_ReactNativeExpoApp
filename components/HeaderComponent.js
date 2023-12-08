import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
//not need install, only insert the Constants , if it don't work try install npm i expo-constants
import Constants from "expo-constants";

const HeaderComponent = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.view}>
                <Text style={styles.HeaderText}>Header</Text>
            </View>
        </SafeAreaView>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    screen: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'orange', // hozzáadva
    },
    HeaderText: {
      paddingTop: 10,
      textAlign: 'center',
      fontSize: 20, // hozzáadva
      fontWeight: 'bold', // hozzáadva
    },
  });
import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
//not need install, only insert the Constants , if it don't work try install npm i expo-constants
import Constants from "expo-constants";

const SafeAreaViewComponents = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.HeaderText}>Header</Text>
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaViewComponents;

const styles = StyleSheet.create({
    screen: {
        //SafeAreaView instead
        paddingTop: Constants.statusBarHeight,
    },
    HeaderText:{
        backgroundColor:"orange",
        paddingTop: 10,
        textAlign:"center",
    }
});

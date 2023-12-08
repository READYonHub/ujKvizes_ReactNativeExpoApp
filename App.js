import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={styles.HomeScreenStyle}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{
            // Itt állítsd be a headerLeft opciót
            headerLeft: () => null, // Üres nézetet ad hozzá a bal oldalra
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  questionTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionButton: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
  },
  optionStyle: {
    fontSize: 16,
  },
  correctOption: {
    backgroundColor: "green",
  },
  incorrectOption: {
    backgroundColor: "red",
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  finishButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  finishButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  HomeScreenStyle: {
    title: "Welcome in Kvizes",
    headerStyle: {
      backgroundColor: "#8a2be2",
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 20,
    },
    headerTitleAlign: "center",
  },
});

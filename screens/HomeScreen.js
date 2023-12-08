// HomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import quizData from "../data/quizData";
import quizDataTheme1 from "../data/quizDataTheme1";
import quizDataTheme2 from "../data/quizDataTheme2";

const themes = [
  { key: "QuizScreen", label: "QuizScreen", quizData: quizData },
  { key: "theme1", label: "Theme 1", quizData: quizDataTheme1 },
  { key: "theme2", label: "Theme 2", quizData: quizDataTheme2 },
];

const HomeScreen = ({ navigation }) => {
  const startQuiz = (selectedTheme, quizData) => {
    navigation.navigate("QuizScreen", { selectedTheme, quizData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleNews}>News</Text>
      {themes.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.themeButton}
          onPress={() => startQuiz(item.key, item.quizData)}
        >
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.title}>Válassz egy témát:</Text>
      {themes.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.themeButton}
          onPress={() => startQuiz(item.key, item.quizData)}
        >
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4b0082",
    flexDirection: "row", // Add this line
    flexWrap: "wrap", // Add this line
    justifyContent: "space-between", // Add this line to create space between columns
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 20,
    color: "slateblue",
    alignSelf: "flex-start", // Align the title to the left
    width: "100%", // Set the width to 100% to ensure it takes the full width
    textAlign: "center", //Válasz egy témát szöveg középre igazitja
  },
  titleNews: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    alignSelf: "flex-start", // Align the title to the left
    width: "100%", // Set the width to 100% to ensure it takes the full width
    textAlign: "left", //Válasz egy témát szöveg középre igazitja
  },
  themeButton: {
    width: "48%", // Set the width of each button to create a 2-column grid
    padding: 10,
    maxWidth: 100,
    maxHeight: 100,
    height: "100%",
    width: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center", //vertkálisan középre igazitja a témákat
    alignItems: "center", //horizoontálisan középre igazitja a téma szöveget
  },
});

export default HomeScreen;

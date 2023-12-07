import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import quizData from "./data/quizData";
import SafeAreaViewComponents from "./components/SafeAreaViewComponents";
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionPress = (selectedOption) => {
    // LOG WHICH ONE YOU CLICK ON
    console.log("Selected option:", selectedOption);

    //itt kell a vizsgálás, ha helyes a válasz, akkor a háttere legyen zöld az összes többnek a háterre legyen piros
     
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaViewComponents />
      <View style={styles.content}>
        {/* display question text  */}
        <Text style={styles.questionTextStyle}>
          {quizData[currentQuestion]?.question}
        </Text>
        {/* it goes through the quizData array (like a foreach loop) with the help of .map() */}
        {quizData[currentQuestion]?.options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleOptionPress(item)}
          >
          {/* display the option text */}
            <Text style={styles.optionStyle}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //BackgroundColor
  container: {
    flex: 1,
    backgroundColor: "#191970",
  },
  content: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  optionButton: {
    marginVertical: "3%",
    padding: "10%",
    paddingHorizontal:"45%",
    backgroundColor: "#6a5acd",
    borderRadius: 100,
  },
   optionStyle:{
    color:'#fffafa',
    fontWeight:'bold',
    
   }
});

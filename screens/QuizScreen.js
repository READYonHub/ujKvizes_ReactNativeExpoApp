// QuizScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function QuizScreen({ navigation, route }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const { selectedTheme, quizData } = route.params;

  useEffect(() => {
    if (currentQuestion === 0) {
      setStartTime(new Date());
    }
  }, [currentQuestion]);

  const handleOptionPress = (selectedOption) => {
    // Ellenőrizd, hogy quizData ne legyen null vagy undefined
    if (!quizData || !Array.isArray(quizData)) {
      console.error('Invalid quiz data:', quizData);
      return;
    }

    const isCorrect = selectedOption === quizData[currentQuestion]?.answer;

    setAnswerStatus(isCorrect);

    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setTimeout(() => {
      setAnswerStatus(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }, 1000);
  };

  const calculatePercentage = () => {
    const totalQuestions = quizData.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    return percentage.toFixed(2);
  };

  const calculateTimeTaken = () => {
    const start = startTime;
    const end = endTime || new Date();
    const timeTaken = (end - start) / 1000;
    return timeTaken.toFixed(2);
  };

  const finishQuiz = () => {
    setEndTime(new Date());
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.questionTextStyle}>
          {quizData[currentQuestion] ? quizData[currentQuestion].question : 'Nincs több kérdés.'}
        </Text>
        {quizData[currentQuestion] && quizData[currentQuestion].options && (
          quizData[currentQuestion].options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answerStatus === null
                  ? {}
                  : answerStatus
                    ? styles.correctOption
                    : styles.incorrectOption,
              ]}
              onPress={() => handleOptionPress(item)}
              disabled={answerStatus !== null}
            >
              <Text style={styles.optionStyle}>{item}</Text>
            </TouchableOpacity>
          ))
        )}
        {currentQuestion === quizData.length && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Kiértékelés:</Text>
            <Text style={styles.resultText}>
              Helyes válaszok: {correctAnswers} / {quizData.length}
            </Text>
            <Text style={styles.resultText}>
              Teljesítmény: {calculatePercentage()}%
            </Text>
            <Text style={styles.resultText}>
              Időtartam: {calculateTimeTaken()} másodperc
            </Text>
          </View>
        )}
      </View>
      {currentQuestion === quizData.length && (
        <TouchableOpacity style={styles.finishButton} onPress={finishQuiz}>
          <Text style={styles.finishButtonText}>Vége</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  questionTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
  },
  optionStyle: {
    fontSize: 16,
  },
  correctOption: {
    backgroundColor: 'green',
  },
  incorrectOption: {
    backgroundColor: 'red',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  finishButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  finishButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizScreen;

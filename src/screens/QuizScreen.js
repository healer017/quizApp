import React, {useState} from 'react'
import {View, Text, FlatList} from 'react-native'

import Option from '../components/Option'
import CustomButton from '../components/CustomButton'
import DATA from '../data/dummy-data'
import {QuizScreenStyles} from '../styles/AuthStyles'
import '../data/quizScore'

const QuizScreen = ({navigation}) => {
  const [q_no, setQ_no] = useState(0)
  const [remaining, setRemaining] = useState(DATA.length)
  const [selectedOption, setSelectedOption] = useState('')
  const [score, setScore] = useState(0)

  const {
    mainContainer,
    topButtonContainer,
    topBtnLeft,
    topBtnRight,
    questionContainer,
    bottomButtonContainer,
  } = QuizScreenStyles

  const selectedOptionHandler = item => {
    setSelectedOption(item)
  }

  const increment = () => {
    q_no < DATA.length - 1
      ? setQ_no(q_no + 1)
      : navigation.navigate('Result', {quizScore: score})
    setRemaining(remaining - 1)
    selectedOption === DATA[q_no].correctAns && setScore(score + 1)
  }

  return (
    <View style={mainContainer}>
      <View style={topButtonContainer}>
        <View style={topBtnLeft}>
          <Text style={{fontSize: 15, color: '#fff'}}>
            Question: {q_no + 1}/{DATA.length}
          </Text>
        </View>
        <View style={topBtnRight}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
            Remaining: {remaining}
          </Text>
        </View>
      </View>
      <View style={questionContainer}>
        <Text style={{color: '#fff', letterSpacing: 2, fontWeight: 'bold'}}>
          Q: {DATA[q_no].que}
        </Text>
      </View>
      <FlatList
        data={DATA[q_no].ans}
        numColumns={2}
        renderItem={({item}) => (
          <Option onPress={() => selectedOptionHandler(item)} text={item} />
        )}
      />
      <View style={bottomButtonContainer}>
        <CustomButton onPress={() => setQ_no(q_no - 1)} btnText={'PREVIOUS'} />
        <CustomButton
          onPress={increment}
          btnText={q_no === DATA.length - 1 ? 'FINISH' : 'NEXT'}
        />
      </View>
    </View>
  )
}

export default QuizScreen

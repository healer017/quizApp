import {StyleSheet} from 'react-native'

export const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182635',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
})

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  blackText: {
    color: '#000',
    marginVertical: 5,
  },
})

export const QuizScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  blackText: {
    color: '#000',
    marginVertical: 5,
  },
  topButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBtnLeft: {
    backgroundColor: '#182635cf',
    paddingVertical: 17,
    paddingHorizontal: 30,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
  },
  topBtnRight: {
    backgroundColor: '#182635cf',
    paddingVertical: 17,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
  },
  questionContainer: {
    backgroundColor: '#000000c0',
    marginHorizontal: 5,
    marginVertical: 25,
    paddingVertical: 90,
    paddingHorizontal: 35,
    borderRadius: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  options: {
    paddingVertical: 40,
    paddingHorizontal: 70,
    marginHorizontal: 3,
    backgroundColor: '#182635cf',
    borderRadius: 8,
    justifyContent: 'space-evenly',
  },
  bottomButtonContainer: {
    marginHorizontal: 30,
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

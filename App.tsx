import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [toggle, setToggle] = useState('PERCENTAGE');
  const [percentage, setPercentage] = useState(65);
  const [inputValue, setInputValue] = useState('65');

  const handleSliderChange = (value: number) => {
    setPercentage(value);
    setInputValue(value.toString());
  };

  const handleInputChange = (value: string) => {
    const numericValue = Math.min(Math.max(parseInt(value) || 0, 0), 100);
    setPercentage(numericValue);
    setInputValue(numericValue.toString());
  };

  const isPercentage = toggle === 'PERCENTAGE';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Source Minimum</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={() => setToggle('PERCENTAGE')}>
          <Text style={isPercentage ? styles.selectedToggle : styles.toggle}>
            PERCENTAGE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggle('VOLUME')}>
          <Text style={!isPercentage ? styles.selectedToggle : styles.toggle}>
            VOLUME
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>
        We’ll stop the pump when your tank drops below:
      </Text>
      <View style={(styles.tankContainer, {transform: [{rotate: '-90deg'}]})}>
        <ImageBackground
          source={require('./assets/img/tankBackground.png')}
          style={styles.tankWrapper}
          imageStyle={styles.imageBackground}>
          <View style={[styles.waterTank, {height: `${percentage}%`}]} />
          <Text style={styles.tankPercentageText}>{percentage}%</Text>
        </ImageBackground>
        <ImageBackground
          source={require('./assets/img/track.png')}
          style={styles.trackImage}
          resizeMode="stretch">
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={percentage}
            onValueChange={handleSliderChange}
            step={1}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbImage={require('./assets/img/thumb.png')}
            trackImage={require('./assets/img/track.png')}
          />
        </ImageBackground>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.bottomTitle}>Source Minimum</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input]}
            keyboardType="numeric"
            value={inputValue}
            onChangeText={handleInputChange}
          />
          <Text style={styles.bottomTitle}>%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    marginBottom: 38,
    color: '#30324E',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 31,
    borderWidth: 2,
    borderColor: '#BCE5FF',
    borderRadius: 300,
    padding: 4,
  },
  toggle: {
    fontSize: 11,
    color: '#30324E',
    fontFamily: 'Montserrat-SemiBold',
    width: 168.5,
    paddingVertical: 4,
    textAlign: 'center',
  },
  selectedToggle: {
    fontSize: 11,
    color: '#30324E',
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#BCE5FF',
    borderRadius: 10,
    paddingVertical: 4,
    width: 168.5,
    textAlign: 'center',
    overflow: 'hidden',
  },
  infoText: {
    width: 227,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
    color: '#30324E',
    fontFamily: 'Montserrat-Bold',
    lineHeight: 19.5,
  },
  tankContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    marginHorizontal: 30,
  },
  tankWrapper: {
    transform: [{rotate: '90deg'}],
    width: 204,
    height: 167,
    marginHorizontal: 'auto',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: 204,
    height: 205,
    marginVertical: -16,
  },
  waterTank: {
    position: 'absolute',
    bottom: -13,
    width: 184,
    backgroundColor: '#BCE5FF',
    borderRadius: 9,
  },
  tankPercentageText: {
    position: 'absolute',
    fontSize: 21,
    color: '#30324E',
    fontFamily: 'Montserrat-SemiBold',
  },
  slider: {
    width: 190,
    height: 10,
    marginLeft: -10,
  },
  trackImage: {
    marginLeft: -5,
    marginTop: 40,
    width: 177,
    height: 14,
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Montserrat-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#EAEAED',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingBottom: 30,
    paddingTop: 30,
  },
  bottomTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#30324E',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 50,
    height: 30,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
});

export default App;

import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/base';
import Styles from './Intro.styles';

type IntroProps = {
  navigation: any
}

function Intro({ navigation }: IntroProps) {
  const onBtnClick = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>SocarMobile</Text>
      <Button title="Sign In" color="black" onPress={onBtnClick} buttonStyle={Styles.button} />
    </View>
  );
}

export default Intro;

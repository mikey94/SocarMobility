import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/base';
import Styles from './Intro.styles';
import { useAppDispatch } from '../../redux/hooks';
import { applyCustomData } from '../../redux/fleet-slice/fleet-slice';
import FleetData from '../../constants/fleets';

type IntroProps = {
  navigation: any
}

function Intro({ navigation }: IntroProps) {
  const dispatch = useAppDispatch();
  const onBtnClick = () => {
    navigation.navigate('Main');
  };
  const onBtnClickCustom = () => {
    dispatch(applyCustomData(FleetData));
    navigation.navigate('Main');
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>SocarMobile</Text>
      <Button title="Sign In" color="black" onPress={onBtnClick} buttonStyle={Styles.button} />
      <Button title="Sign In with custom data" color="black" onPress={onBtnClickCustom} buttonStyle={Styles.button} />
    </View>
  );
}

export default Intro;

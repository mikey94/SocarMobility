import React, { useState } from 'react';
import {
  SafeAreaView, View, TextInput, Text,
} from 'react-native';
import { Button } from '@rneui/themed';
import Styles from './AddCar.styles';
import Colors from '../../constants/colors';

import { useAppDispatch } from '../../redux/hooks';
import { addFleet, fleet } from '../../redux/fleet-slice/fleet-slice';
import Routes from '../../constants/routes';

type addCarsProps = {
  navigation: any
}

function AddCar({ navigation }: addCarsProps) {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [milage, setMilage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [messageShow, setMessageShow] = useState(false);
  const dispatch = useAppDispatch();

  const validateFields = () => {
    const value: boolean = !!(brand || type || milage || price || description !== '');
    return value;
  };

  function generateRandomCoordinates(from: any, to: any, fixed: number) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  const onAddBtnClick = () => {
    if (validateFields()) {
      const payload: fleet = {
        id: Math.round(Math.random() * Date.now()),
        brand,
        model: type,
        milage,
        pricePerMonth: parseFloat(price),
        description,
        activeStatus: false,
        isCompleted: false,
        latitude: generateRandomCoordinates(1, 7, 3),
        longitude: generateRandomCoordinates(100, 110, 3),
      };
      dispatch(addFleet(payload));
      navigation.navigate(Routes.CARS);
    } else {
      setMessageShow(true);
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.formWrapper}>
        <TextInput style={Styles.input} placeholder="Brand" placeholderTextColor={Colors.white} onChangeText={setBrand} />
        <TextInput style={Styles.input} placeholder="Type" placeholderTextColor={Colors.white} onChangeText={setType} />
        <TextInput style={Styles.input} placeholder="Milage" placeholderTextColor={Colors.white} onChangeText={setMilage} />
        <TextInput style={Styles.input} placeholder="Cost per month" placeholderTextColor={Colors.white} onChangeText={setPrice} keyboardType="numeric" />
        <TextInput multiline style={Styles.multilineInput} placeholder="Description" placeholderTextColor={Colors.white} onChangeText={setDescription} underlineColorAndroid="transparent" />
        {
        messageShow && <Text style={Styles.errorText}>Please fill all details</Text>
        }
      </View>
      <Button title="Add new car" color={Colors.black} onPress={onAddBtnClick} buttonStyle={Styles.button} />
    </SafeAreaView>
  );
}

export default AddCar;

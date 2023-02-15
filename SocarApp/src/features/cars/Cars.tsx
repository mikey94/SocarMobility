import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from '@rneui/base';
import { Tab } from '@rneui/themed';
import Styles from './Cars.styles';
import Routes from '../../constants/routes';
import Fleets from './fleets/Fleets';
import FleetsActive from './fleetsActive/FleetsActive';
import FleetsCompleted from './fleetsCompleted/FleetsCompleted';

type carsProps = {
    navigation: any
}

function Cars({ navigation }: carsProps) {
  const [index, setIndex] = useState(0);
  const onAddBtnClick = () => {
    navigation.navigate(Routes.ADD_CAR);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Button title="Add Car" color="black" onPress={onAddBtnClick} buttonStyle={Styles.button} />
      <View style={Styles.tabWrapper}>
        <Tab indicatorStyle={Styles.tab} value={index} onChange={setIndex} dense>
          <Tab.Item titleStyle={Styles.tabItem}>Fleet Collection</Tab.Item>
          <Tab.Item titleStyle={Styles.tabItem}>Active Reservations</Tab.Item>
          <Tab.Item titleStyle={Styles.tabItem}>Completed Reservations</Tab.Item>
        </Tab>
        {
          !!(index === 0) && <Fleets navigation={navigation} />
        }
        {
          !!(index === 1) && <FleetsActive />
        }
        {
          !!(index === 2) && <FleetsCompleted />
        }
      </View>
    </SafeAreaView>
  );
}

export default Cars;

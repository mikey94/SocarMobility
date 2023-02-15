import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { fleet } from '../../../redux/fleet-slice/fleet-slice';
import Styles from './FleetsCompleted.styles';

type fleetItem = {
  fleetData: fleet
}

function FleetsCompletedListItem({ fleetData }: fleetItem) {
  return (
    <ImageBackground style={Styles.itemWrapper} source={require('../../../assets/images/tesla.png')}>
      <Text style={Styles.brandText}>{fleetData.brand}</Text>
      <Text style={Styles.modelText}>{fleetData.model}</Text>
      <Text style={Styles.priceText}>
        Price: $
        {fleetData.pricePerMonth}
        /Month
      </Text>
      <View style={Styles.overlay} />
    </ImageBackground>
  );
}

export default FleetsCompletedListItem;

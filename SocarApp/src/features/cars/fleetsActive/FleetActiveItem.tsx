import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from '@rneui/themed';
import Styles from './FleetsActive.styles';
import Colors from '../../../constants/colors';
import { fleet, completeRent } from '../../../redux/fleet-slice/fleet-slice';
import { useAppDispatch } from '../../../redux/hooks';

type itemProps = {
  fleetData: fleet
}

function FleetActiveItem({ fleetData }: itemProps) {
  const dispatch = useAppDispatch();
  const onPressDeActivate = () => {
    dispatch(completeRent(fleetData));
  };
  return (
    <View style={Styles.itemWrapper}>
      <View style={Styles.imageWrapper}>
        <Image style={Styles.itemImage} source={require('../../../assets/images/tesla.png')} />
      </View>
      <View style={Styles.detailsWrapper}>
        <View>
          <Text style={Styles.brandText}>{fleetData.brand}</Text>
          <Text style={Styles.modelText}>{fleetData.model}</Text>
          <Text style={Styles.priceText}>
            {`USD ${fleetData.pricePerMonth}/Month`}
          </Text>
        </View>
        <View style={Styles.activeStatusWrapper}>
          <View style={Styles.activeCircle} />
          <Text style={Styles.modelText}>Active</Text>
        </View>
      </View>
      <Text style={Styles.detailsText}>
        {fleetData.description}
      </Text>
      <Button
        style={Styles.deActiveBtn}
        color={Colors.black}
        onPress={onPressDeActivate}
        title="Complete reservation"
      />
    </View>
  );
}

export default FleetActiveItem;

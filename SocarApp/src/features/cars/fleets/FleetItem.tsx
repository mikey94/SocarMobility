import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from '@rneui/themed';
import Styles from './Fleets.styles';
import Routes from '../../../constants/routes';
import Colors from '../../../constants/colors';
import { fleet, setSelectedItem } from '../../../redux/fleet-slice/fleet-slice';
import { useAppDispatch } from '../../../redux/hooks';

type itemProps = {
  navigation: any,
  fleetData: fleet
}

function FleetItem({ navigation, fleetData }: itemProps) {
  const dispatch = useAppDispatch();
  const onMoreBtnPress = () => {
    dispatch(setSelectedItem(fleetData.id));
    navigation.navigate(Routes.CAR_DETAILS);
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
        </View>
        <Button
          containerStyle={Styles.moreBtn}
          color={Colors.black}
          onPress={onMoreBtnPress}
          title="More details"
        />
      </View>
    </View>
  );
}

export default FleetItem;

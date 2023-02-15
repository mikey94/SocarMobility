import React from 'react';
import {
  View, SafeAreaView, Image, Text,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useSelector } from 'react-redux';
import Styles from './FleetDetails.styles';
import Colors from '../../../constants/colors';
import { RootState } from '../../../redux/store';
import { fleet, rentFleet } from '../../../redux/fleet-slice/fleet-slice';
import { useAppDispatch } from '../../../redux/hooks';
import Routes from '../../../constants/routes';

type fleetProps = {
  navigation: any
}

function FleetDetails({ navigation }: fleetProps) {
  const dispatch = useAppDispatch();
  const { fleetList, selectedItem } = useSelector((state: RootState) => state.fleets);
  const selectedFleet: fleet = fleetList.find((fleetItem:fleet) => fleetItem.id === selectedItem);
  const onRentBtnPress = () => {
    dispatch(rentFleet(selectedFleet));
    navigation.navigate(Routes.CARS);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.detailWrapper}>
        <View style={Styles.imageWrapper}>
          <Image style={Styles.itemImage} source={require('../../../assets/images/tesla.png')} />
        </View>
        <View style={Styles.detailsWrapper}>
          <View>
            <View style={Styles.mainWrapper}>
              <View>
                <Text style={Styles.brandText}>{selectedFleet.brand}</Text>
                <Text style={Styles.modelText}>{selectedFleet.model}</Text>
              </View>
              <Text style={Styles.priceText}>
                Price: $
                {' '}
                {selectedFleet.pricePerMonth}
                {' '}
                /Month
              </Text>
            </View>
            <Text style={Styles.milageText}>
              Milage:
              {' '}
              {selectedFleet.milage}
              Km
            </Text>
            <Text style={Styles.detailsText}>Description</Text>
            <Text style={Styles.detailsText}>
              {selectedFleet.description}
            </Text>
          </View>
        </View>
      </View>
      <Button style={Styles.rentBtn} color={Colors.black} onPress={onRentBtnPress} title="Rent" />
    </SafeAreaView>
  );
}

export default FleetDetails;

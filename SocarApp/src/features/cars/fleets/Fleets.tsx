import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import FleetItem from './FleetItem';
import { RootState } from '../../../redux/store';
import { fleet } from '../../../redux/fleet-slice/fleet-slice';

type fleetsProps = {
  navigation: any
}

function Fleets({ navigation }: fleetsProps) {
  const { fleetList } = useSelector((state: RootState) => state.fleets);
  return (
    <ScrollView>
      {
        !!fleetList.length
        && fleetList.map((fleetItem: fleet) => (
          <FleetItem key={fleetItem.id} navigation={navigation} fleetData={fleetItem} />
        ))
      }
    </ScrollView>
  );
}

export default Fleets;

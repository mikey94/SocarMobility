import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { fleet } from '../../../redux/fleet-slice/fleet-slice';
import { RootState } from '../../../redux/store';
import FleetActiveItem from './FleetActiveItem';

function FleetsActive() {
  const { activeReservations } = useSelector((state: RootState) => state.fleets);
  return (
    <SafeAreaView>
      <ScrollView>
        {
          !!activeReservations.length
          && activeReservations.map((fleetItem: fleet) => (
            <FleetActiveItem key={fleetItem.id} fleetData={fleetItem} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default FleetsActive;

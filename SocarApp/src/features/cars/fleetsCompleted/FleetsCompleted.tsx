import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { fleet } from '../../../redux/fleet-slice/fleet-slice';
import { RootState } from '../../../redux/store';
import FleetsCompletedListItem from './FleetsCompletedListItem';

function FleetsCompleted() {
  const { completedReservations } = useSelector((state: RootState) => state.fleets);
  return (
    <ScrollView>
      {
        !!completedReservations.length
        && completedReservations.map((fleetItem: fleet) => (
          <FleetsCompletedListItem key={fleetItem.id} fleetData={fleetItem} />
        ))
      }
    </ScrollView>
  );
}

export default FleetsCompleted;

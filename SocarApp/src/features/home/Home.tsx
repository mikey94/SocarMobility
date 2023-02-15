import React from 'react';
import { SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { fleet } from '../../redux/fleet-slice/fleet-slice';
import { RootState } from '../../redux/store';
import Styles from './Home.styles';

function Home() {
  const { fleetList } = useSelector((state: RootState) => state.fleets);
  return (
    <SafeAreaView style={Styles.container}>
      <MapView
        style={Styles.map}
        initialRegion={{
          latitude: 4.2105,
          longitude: 101.9758,
          latitudeDelta: 0.09001,
          longitudeDelta: 0.09001,
        }}
      >
        {
          fleetList.map((fleetItem: fleet) => (
            <Marker
              key={fleetItem.id}
              coordinate={{ latitude: fleetItem.latitude, longitude: fleetItem.longitude }}
              title={fleetItem.brand}
            />
          ))
        }
      </MapView>
    </SafeAreaView>
  );
}

export default Home;

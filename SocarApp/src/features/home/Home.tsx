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
          latitude: 3.205398,
          longitude: 101.613664,
          latitudeDelta: 0.10001,
          longitudeDelta: 0.10001,
        }}
      >
        {
          fleetList.map((fleetItem: fleet) => (
            <Marker
              key={fleetItem.id.toString()}
              coordinate={{ latitude: fleetItem.latitude, longitude: fleetItem.longitude }}
              title={fleetItem.brand}
              image={require('../../assets/icons/car.png')}
            />
          ))
        }
      </MapView>
    </SafeAreaView>
  );
}

export default Home;

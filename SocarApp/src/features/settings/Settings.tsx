import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';
import Colors from '../../constants/colors';
import Styles from './Settings.styles';

function Settings() {
  return (
    <SafeAreaView style={Styles.container}>
      <Icon name="account-cog" type="material-community" size={300} color={Colors.white} />
      <Text style={Styles.title}>Settings</Text>
      <View style={Styles.options}>
        <ListItem containerStyle={Styles.listContent}>
          <Icon name="map-marker" type="material-community" color={Colors.white} />
          <ListItem.Content>
            <ListItem.Title style={Styles.listItemText}>Location Configuration</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.white} />
        </ListItem>
        <ListItem containerStyle={Styles.listContent}>
          <Icon name="data-matrix" type="material-community" color={Colors.white} />
          <ListItem.Content>
            <ListItem.Title style={Styles.listItemText}>Data & Privacy</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.white} />
        </ListItem>
        <ListItem containerStyle={Styles.listContent}>
          <Icon name="bell" type="material-community" color={Colors.white} />
          <ListItem.Content>
            <ListItem.Title style={Styles.listItemText}>Notifications</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.white} />
        </ListItem>
      </View>
    </SafeAreaView>
  );
}

export default Settings;

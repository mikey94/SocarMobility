import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';
import Styles from './Profile.styles';
import Colors from '../../constants/colors';
import routes from '../../constants/routes';
import { cleanReduxPersistData } from '../../redux/store';
import { clearData } from '../../redux/fleet-slice/fleet-slice';
import { useAppDispatch } from '../../redux/hooks';

type profileProps = {
  navigation: any
}

function Profile({ navigation }: profileProps) {
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(clearData());
    cleanReduxPersistData();
    navigation.navigate(routes.INTRO);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Icon name="supervised-user-circle" size={300} color={Colors.white} />
      <Text style={Styles.title}>Buwaneka Ranatunga</Text>
      <View style={Styles.options}>
        <ListItem containerStyle={Styles.listContent}>
          <Icon name="account-edit-outline" type="material-community" color={Colors.white} />
          <ListItem.Content>
            <ListItem.Title style={Styles.listItemText}>Edit profile</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.white} />
        </ListItem>
        <ListItem containerStyle={Styles.listContent}>
          <Icon name="credit-card-outline" type="material-community" color={Colors.white} />
          <ListItem.Content>
            <ListItem.Title style={Styles.listItemText}>Add payments</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.white} />
        </ListItem>
        <ListItem containerStyle={Styles.listContent} onPress={onSignOut}>
          <Icon name="logout" type="material-community" color={Colors.white} />
          <ListItem.Content>
            <ListItem.Title style={Styles.listItemText}>Sign out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.white} />
        </ListItem>
      </View>
    </SafeAreaView>
  );
}

export default Profile;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store } from './src/redux/store';
import MainStack from './src/navigation/MainStackNavigator';

function App(): JSX.Element {
  const persistor = persistStore(store);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

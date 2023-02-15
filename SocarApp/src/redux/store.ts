import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fleetSlice from './fleet-slice/fleet-slice';

export const rootReducer = combineReducers({
  fleets: persistReducer({ key: 'fleets', storage: AsyncStorage }, fleetSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.dispatch>

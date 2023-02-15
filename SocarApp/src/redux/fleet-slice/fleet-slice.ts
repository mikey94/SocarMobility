import { createSlice } from '@reduxjs/toolkit';

export type fleet = {
  id: number,
  brand: string,
  model: string,
  milage: string,
  pricePerMonth: number,
  description: string,
  activeStatus: boolean,
  isCompleted: boolean,
  longitude: number,
  latitude: number
}

interface IFleetState {
  fleetList: Array<fleet>,
  isLoading: boolean,
  activeReservations: Array<fleet>,
  completedReservations: Array<fleet>
  selectedItem: number | null,
}

const INITIAL_STATE: IFleetState = {
  fleetList: [],
  activeReservations: [],
  completedReservations: [],
  isLoading: false,
  selectedItem: null,
};

const fleetSlice = createSlice({
  name: 'fleet',
  initialState: INITIAL_STATE,
  reducers: {
    addFleet: (state: IFleetState, action: { payload: fleet }) => {
      state.fleetList.push(action.payload);
    },
    setSelectedItem: (state: IFleetState, action: { payload: number }) => {
      state.selectedItem = action.payload;
    },
    rentFleet: (state: IFleetState, action: { payload: fleet }) => {
      const data: fleet = { ...action.payload, activeStatus: true };
      state.activeReservations.push(data);
    },
    completeRent: (state:IFleetState, action: { payload: fleet }) => {
      const { id } = action.payload;
      const data: fleet = { ...action.payload, activeStatus: false, isCompleted: true };
      state.activeReservations = state.activeReservations.filter((item: any) => item.id !== id);
      state.completedReservations.push(data);
    },
  },
});

export const {
  addFleet, setSelectedItem, rentFleet, completeRent,
} = fleetSlice.actions;
export default fleetSlice.reducer;

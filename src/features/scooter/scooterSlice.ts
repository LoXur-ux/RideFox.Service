import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Scooter {
  id: string;
  name: string;
  battery: number;
  speed: number;
  distanceToday: number;
  totalDistance: number;
  location: string;
  inOperation: boolean;
}

interface ScooterState {
  scooters: Scooter[];
  selectedScooter: Scooter | null;
}

const initialState: ScooterState = {
  scooters: [],
  selectedScooter: null,
};

const scooterSlice = createSlice({
  name: 'scooter',
  initialState,
  reducers: {
    setScooters(state, action: PayloadAction<Scooter[]>) {
      state.scooters = action.payload;
    },
    selectScooter(state, action: PayloadAction<string>) {
      state.selectedScooter = state.scooters.find(scooter => scooter.id === action.payload) || null;
    },
  },
});

export const { setScooters, selectScooter } = scooterSlice.actions;

export default scooterSlice.reducer;

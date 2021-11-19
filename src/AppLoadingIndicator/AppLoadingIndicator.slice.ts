import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../App.store';

export interface AppLoadingIndicatorState {
  isLoading: boolean;
}

const initialState: AppLoadingIndicatorState = {
  isLoading: false
};

const appLoadingIndicatorSlice = createSlice({
  name: 'appLoadingIndicator',
  initialState,
  reducers: {
    startLoading: (state) => {
      return {...state, isLoading: true}
    },
    stopLoading: (state => {
      return {...state, isLoading: false}
    })
  }
});


export const { startLoading, stopLoading } = appLoadingIndicatorSlice.actions;

export const selectIsAppLoading = (state: RootState) => state.appLoadingIndicator.isLoading;

export const appLoadingIndicatorReducer = appLoadingIndicatorSlice.reducer;

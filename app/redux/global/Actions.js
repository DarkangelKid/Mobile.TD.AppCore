import {globalSlice, callTypes} from './Slice';
import store from '../store';
import {createNextState} from '@reduxjs/toolkit';

const {actions} = globalSlice;

export const setRandom = () => dispatch => {
  dispatch(actions.setRandom());
};

export const saveCurrentPosition = CurrentPosition => dispatch => {
  return dispatch(actions.saveCurrentPosition(CurrentPosition));
};

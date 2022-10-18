import {globalSlice, callTypes} from './Slice';
import store from '../store';
import {createNextState} from '@reduxjs/toolkit';

const {actions} = globalSlice;

export const setRandom = () => dispatch => {
  dispatch(actions.setRandom());
};

export const saveCurrentPosition = currentPosition => dispatch => {
  return dispatch(actions.saveCurrentPosition(currentPosition));
};

export const setLoadPosition = data => dispatch => {
  return dispatch(actions.setLoadPosition(data));
};

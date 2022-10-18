import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  userInfo: null,
  random: 0,
  currentPosition: null,
  loadPosition: false,
  listLoading: false,
  actionsLoading: false,
  error: null,
};
export const callTypes = {
  list: 'list',
  action: 'action',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },

    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    setRandom: (state, action) => {
      state.random = Math.random();
    },
    saveCurrentPosition: (state, action) => {
      if (action.payload) {
        state.currentPosition = action.payload;
        state.loadPosition = true;
      } else {
        state.currentPosition = null;
        state.loadPosition = false;
      }
    },
    setLoadPosition: (state, action) => {
      state.loadPosition = action.payload;
    },
  },
});

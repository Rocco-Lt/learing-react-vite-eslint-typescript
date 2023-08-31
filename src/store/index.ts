import { configureStore } from '@reduxjs/toolkit';

import globalStateReducer from './module/global';
export default configureStore({
  reducer: {
    globalReducer: globalStateReducer
  }
});

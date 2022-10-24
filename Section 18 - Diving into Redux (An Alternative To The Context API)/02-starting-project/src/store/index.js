import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// The store only has one root reducer
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

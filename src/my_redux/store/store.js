import { configureStore } from '@reduxjs/toolkit';
import creditReducer from '../reducers/creditSlice';
import codeReducer from '../reducers/enteredCodeSlice';
import productsReducer from '../reducers/productsSlice';
import errorsReducer from '../reducers/errorsSlice';

export default configureStore({
  reducer: {
    credit: creditReducer,
    enteredCode: codeReducer,
    products: productsReducer,
    errors: errorsReducer
  },
});

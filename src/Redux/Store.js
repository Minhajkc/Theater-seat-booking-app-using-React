import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import SeatsliceReducer from './Seatslice'; 

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, SeatsliceReducer);

const store = configureStore({
  reducer: {
    bookedseats: persistedReducer 
  }
});

const persistor = persistStore(store);

export { store, persistor };

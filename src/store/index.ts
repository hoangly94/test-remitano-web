import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from './api/root';
import indexSlice from './modules/index';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    index: indexSlice,
  },

  middleware: (gDM) => gDM()
    .concat([rootApi.middleware]),
});


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>
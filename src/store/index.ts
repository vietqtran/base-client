import { persistReducer, persistStore } from 'redux-persist'

import { PersistConfig } from 'redux-persist/es/types'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './auth/authSlice'

const persistConfig: PersistConfig<any> = {
   key: 'root',
   storage
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)

const store = configureStore({
   reducer: {
      auth: persistedAuthReducer
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store)

export { store, persistor }

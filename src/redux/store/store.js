import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/userReducer/userSlice'
import cartReducer from '../reducers/cartReducer/cartSlice'
import productsReducer from '../reducers/productsReducer/productsSlice'
import productDetailReducer from '../reducers/productsReducer/productDetailSlice'

const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export const persistor = persistStore(store)
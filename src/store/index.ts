import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalStateReducer from './module/global';

const persistConfig = {
  key: 'root', // 自动框架生产的根目录id 是root。不变
  storage, // 这个是选择用什么存储，session 还是 storage
  blacklist: ['globalStateReducer'] //过滤掉不需要存储在store中的数据
};

const reducers = combineReducers({
  globalStateReducer
});

// 一个经过处理的reducer
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persist = persistStore(store); // 数据持久化存储

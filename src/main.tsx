import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import '@/styles/reset.less';
import '@/styles/common.less';
import { store, persist } from '@/store/index.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'amfe-flexible';
import 'amfe-flexible/index.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

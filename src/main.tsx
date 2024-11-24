import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import './index.css'
import App from './App.tsx'
import containerReducer from "./redux/container";
import componentReducer from "./redux/component";

const store = configureStore({
    reducer: {
        container: containerReducer,
        component: componentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)

import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../../router/AppRouter'
import store from '../../store'
import './App.module.css'

export default function App() {
  return (
    <Provider store={store}>    
        <AppRouter />
    </Provider>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/assets/fonts/stylesheet.css'
import 'src/index.scss'
import { App } from 'src/App'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/assets/fonts/stylesheet.css'
import 'src/index.scss'
import { App } from 'src/App'
import { Provider } from 'react-redux'
import { setupStore } from './store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

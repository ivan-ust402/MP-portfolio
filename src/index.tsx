import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/assets/fonts/stylesheet.css'
import 'src/index.scss'
import { App } from 'src/App'
import { ThemeProvider } from 'src/services/ThemeService'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

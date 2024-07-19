import { RouterProvider } from 'react-router-dom'
import 'src/App.scss'
import { router } from './router'
import React from 'react'
import { ThemeProvider } from 'src/services/ThemeService'
import { I18nProvider } from './services/i18n/I18nService'

export const App = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nProvider>
  )
}

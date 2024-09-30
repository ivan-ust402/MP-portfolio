import { RouterProvider } from 'react-router-dom'
import 'src/App.scss'
import { router } from './router'
import React, { useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from 'src/services/ThemeService'
import { I18nProvider } from './services/i18n/I18nService'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { resolutionSlice } from './store/reducers/ResolutionSlice'

export const App = () => {
  const { desktop, firstBreakpoint } = useAppSelector((state) => state.resolution)
  const { setDesktopResolution } = resolutionSlice.actions
  const dispatch = useAppDispatch()
  if (desktop === null) {
    dispatch(setDesktopResolution(window.innerWidth > firstBreakpoint))
  }
  const desktopRef = useRef<null|boolean>(null)
  desktopRef.current = desktop

  const handleResize = useCallback(() => {
    const size = window.innerWidth
    if (size > firstBreakpoint) {
      if (!desktopRef.current) {
        dispatch(setDesktopResolution(true))
        desktopRef.current = true
      }
    } else {
      if (desktopRef.current) {
        dispatch(setDesktopResolution(false))
        desktopRef.current = false
      }
    }
  }, [desktop])
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
 

  return (
    <I18nProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nProvider>
  )
}

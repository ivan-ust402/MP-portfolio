import { RouterProvider } from 'react-router-dom'
import 'src/App.scss'
import { router } from './router'
import React, { useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from 'src/services/ThemeService'
import { I18nProvider } from './services/i18n/I18nService'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { resolutionSlice } from './store/reducers/ResolutionSlice'
import { burgerSlice } from './store/reducers/BurgerSlice'
import { viewportHeightSlice } from './store/reducers/ViewportHeightSlice'

export const App = () => {
  const dispatch = useAppDispatch()
  const { desktop, firstBreakpoint } = useAppSelector((state) => state.resolution)
  const { setDesktopResolution } = resolutionSlice.actions
  const { changeBurgerStatus } = burgerSlice.actions
  const { setViewportHeight } = viewportHeightSlice.actions

  if (desktop === null) {
    dispatch(setDesktopResolution(window.innerWidth > firstBreakpoint))
  }

  if (desktop === null || desktop) {
    dispatch(changeBurgerStatus(false))
  }
  const desktopRef = useRef<null|boolean>(null)

  const handleResize = useCallback(() => {
    const size = window.innerWidth
     dispatch(setViewportHeight(
      window.visualViewport 
      ? window.visualViewport.height
      : window.innerHeight
    ))
    
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
  }, [dispatch, firstBreakpoint, setDesktopResolution, setViewportHeight])
  
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

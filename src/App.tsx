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
  const { height } = useAppSelector(state => state.viewportHeight)
  const { setDesktopResolution } = resolutionSlice.actions
  const { changeBurgerStatus } = burgerSlice.actions
  const { setViewportHeight } = viewportHeightSlice.actions

  if (height === 0) {
    dispatch(setViewportHeight(
      window.visualViewport 
      ? window.visualViewport.height
      : window.innerHeight
    ))
  }
  if (desktop === null) {
    dispatch(setDesktopResolution(window.innerWidth > firstBreakpoint))
  }

  if (desktop === null || desktop) {
    dispatch(changeBurgerStatus(false))
  }
  const desktopRef = useRef<null|boolean>(null)
  const heightRef = useRef<null|number>(null)

  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth
    const currentHeight = window.visualViewport 
    ? window.visualViewport.height
    : window.innerHeight

    setViewportHeight(currentHeight)
    heightRef.current = currentHeight

    if (currentWidth > firstBreakpoint) {
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
    document.documentElement.style.setProperty('--vpheight', `${heightRef.current}px`)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, heightRef])
 
  return (
    <I18nProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nProvider>
  )
}

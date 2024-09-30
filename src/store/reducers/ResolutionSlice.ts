import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ResolutionState {
  desktop: null | boolean,
  firstBreakpoint: number
}

const initialState: ResolutionState = {
  desktop: null,
  firstBreakpoint: 1023
}

export const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {
    setDesktopResolution(state, action: PayloadAction<boolean>) {
      state.desktop = action.payload
    }
  }
})

export default resolutionSlice.reducer
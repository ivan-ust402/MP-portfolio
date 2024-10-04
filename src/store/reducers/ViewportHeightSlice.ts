import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ViewportHeightState {
  height: number,
}

const initialState: ViewportHeightState = {
  height: 0
}

export const viewportHeightSlice = createSlice({
  name: 'viewportHeight',
  initialState,
  reducers: {
    setViewportHeight(state, action: PayloadAction<number>) {
      state.height = action.payload
    }
  }
})

export default viewportHeightSlice.reducer
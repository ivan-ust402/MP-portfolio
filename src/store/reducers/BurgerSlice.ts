import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BurgerState {
  burgerMenuStatus: boolean,
}

const initialState: BurgerState = {
  burgerMenuStatus: false
}

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    changeBurgerStatus(state, action: PayloadAction<boolean>) {
      state.burgerMenuStatus = action.payload
    }
  }
})

export default burgerSlice.reducer
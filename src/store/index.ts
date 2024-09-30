import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { resolutionSlice } from './reducers/ResolutionSlice';

// 1. Создаем корневой редьюсер
export const rootReducer = combineReducers({
  resolution: resolutionSlice.reducer
})

// 2. Создаем хранилище
// При создании стора нет необходимости настраивать devtools и middleware thunk, т.к. они уже идут из коробки
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

// 3. Получаем тип нашего редьюсера
// При помощи ReturnType мы можем получить тот тип, который нам
// возвращает функция
export type RootState = ReturnType<typeof rootReducer>

// 4. Получаем тип нашего хранилища
export type AppStore = ReturnType<typeof setupStore>

// 5. Получаем тип нашего dispatch
export type AppDispatch = AppStore['dispatch']
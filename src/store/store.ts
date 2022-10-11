import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carCostSlice from './reducers/getCarCostReducer'
import leasingTermSlice from './reducers/getLeasingTermReducer'
import initialFeeSlice from './reducers/getInitialFeeReducer'
import { fetchApi } from "./reducers/fetchApi";
import loaderSlice from './reducers/getLoaderReducer'

const rootReducer = combineReducers({
    carCostSlice,
    leasingTermSlice,
    initialFeeSlice,
    [fetchApi.reducerPath]: fetchApi.reducer,
    loaderSlice
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
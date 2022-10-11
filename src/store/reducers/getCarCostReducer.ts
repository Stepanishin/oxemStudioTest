import { createSlice } from "@reduxjs/toolkit";

type DefaultGetCarCostReducerType = {
    number: number,
}

const initialState :DefaultGetCarCostReducerType = {
    number: 1000000,
}

export const carCostSlice = createSlice({
    name: "carCost",
    initialState,
    reducers: {
            carCost(state, value) {
                state.number = value.payload
            },
        },
})

export default carCostSlice.reducer
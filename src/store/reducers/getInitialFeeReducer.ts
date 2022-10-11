import { createSlice } from "@reduxjs/toolkit";

type DefaultGetInitialFeeType = {
    initialFeeProcent: number,
}

const initialState :DefaultGetInitialFeeType = {
    initialFeeProcent: 10,
}

export const initialFeeSlice = createSlice({
    name: "initialFee",
    initialState,
    reducers: {
            initialFee(state, value) {
                state.initialFeeProcent = value.payload
            },
        },
})

export default initialFeeSlice.reducer
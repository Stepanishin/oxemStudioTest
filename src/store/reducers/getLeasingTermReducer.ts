import { createSlice } from "@reduxjs/toolkit";

type DefaultGetLeasingTermType = {
    leasingTermAmount: number,
}

const initialState :DefaultGetLeasingTermType = {
    leasingTermAmount: 1,
}

export const leasingTermSlice = createSlice({
    name: "leasingTerm",
    initialState,
    reducers: {
            leasingTerm(state, value) {
                state.leasingTermAmount = value.payload
            },
        },
})

export default leasingTermSlice.reducer
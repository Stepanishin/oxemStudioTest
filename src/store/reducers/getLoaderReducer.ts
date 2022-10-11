import { createSlice } from "@reduxjs/toolkit";

type DefaultGetLoaderType = {
    isLoading: boolean,
}

const initialState :DefaultGetLoaderType = {
    isLoading: false,
}

export const loaderSlice = createSlice({
    name: "getLoader",
    initialState,
    reducers: {
            getLoader(state) {
                state.isLoading = !state.isLoading
            },
        },
})

export default loaderSlice.reducer
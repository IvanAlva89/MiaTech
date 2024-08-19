import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todos: [],
    },
    reducers: {}
})

export default todoListSlice.reducer;
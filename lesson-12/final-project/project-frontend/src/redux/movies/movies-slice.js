import { createSlice } from "@reduxjs/toolkit";

import {fetchMovies, addMovie, deleteMovie} from "./movies-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const moviesSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMovies.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items = payload;
        })
        .addCase(fetchMovies.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(addMovie.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addMovie.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items.push(payload);
        })
        .addCase(addMovie.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(deleteMovie.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteMovie.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items = state.items.filter(({_id}) => _id !== payload);
        })
        .addCase(deleteMovie.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default moviesSlice.reducer;
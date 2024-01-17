import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/movies";

export const fetchMovies = createAsyncThunk(
    "movies/fetch",
    async(_, thunkAPI) => {
        try {
            const {data} = await api.getAllMovies();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

export const addMovie = createAsyncThunk(
    "movies/add",
    async(data, {rejectWithValue}) => {
        try {
            const {data: result} = await api.addMovie(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    },
)
export const deleteMovie = createAsyncThunk(
    "movies/delete",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteMovie(id);
            return id;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

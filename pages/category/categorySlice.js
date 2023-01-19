// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // Define a service using a base URL and expected endpoints
// export const categoryApi = createApi({
//   reducerPath: 'categoryApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://bangler-store-server.onrender.com/' }),
//   endpoints: (builder) => ({
//     getGetAllCategoy: builder.query({
//       query: () => "category",
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetGetAllCategoyQuery } = categoryApi;

import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
    const res = await axios.get("https://bangler-store-server.onrender.com/category");
    return res.data;
});

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        isLoading: false,
        category: [],
        error: null
    },
    extraReducers: (builder) => {
        // action
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.category = action.payload;
            state.error = null;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.category = [];
            state.error = action.error.message;
        });
    },
});

export default categorySlice.reducer;
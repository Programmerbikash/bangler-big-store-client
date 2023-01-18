import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchBanners = createAsyncThunk("banners/fetchBanners", async () => {
    const res = await axios.get("https://bangler-big-store.vercel.app/banners");
    return res.data;
});

const bannerSlice = createSlice({
    name: 'banners',
    initialState: {
        isLoading: false,
        banners: [],
        error: null
    },
    extraReducers: (builder) => {
        // action
        builder.addCase(fetchBanners.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchBanners.fulfilled, (state, action) => {
            state.isLoading = false;
            state.banners = action.payload;
            state.error = null;
        });
        builder.addCase(fetchBanners.rejected, (state, action) => {
            state.isLoading = false;
            state.banners = [];
            state.error = action.error.message;
        });
    },
});

export default bannerSlice.reducer;
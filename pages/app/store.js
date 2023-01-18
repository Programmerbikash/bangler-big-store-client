
import bannerReducer from "../banner/BannerSlice";
const { configureStore } = require("@reduxjs/toolkit");
const { default: booksReducer } = require("../books/BookSlice");

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
        banners: bannerReducer,
    },
});

export default store;
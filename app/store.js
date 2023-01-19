
import bannerReducer from "../features/banner/BannerSlice";
import categoryReducer from "../features/category/categorySlice";
const { configureStore } = require("@reduxjs/toolkit");
const { default: booksReducer } = require("../pages/books/BookSlice");

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
        banners: bannerReducer,
        category: categoryReducer
    },
});

export default store;
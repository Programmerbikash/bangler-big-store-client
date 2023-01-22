import { bannersApi } from "@/features/banner/BannerSlice";
import { categoriesApi } from "@/features/category/categorySlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../app/apiSlice";
const { configureStore } = require("@reduxjs/toolkit");

// const store = configureStore({
//     reducer: {
//     [bannersApi.reducerPath]: bannersApi.reducer,
//     [categoriesApi.reducerPath]: categoriesApi.reducer,
//   },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(bannersApi.middleware),
    
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(categoriesApi.middleware)
// });

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // product: productSliceReducer,
        // category: categorySliceReducer,
        // paginate:paginateSliceReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
// setupListeners(store.dispatch)
import { apiSlice } from '@/app/apiSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categories: builder.query({
            query: () => '/category',
          //   keepUnusedDataFor: 5,
        }),
        category: builder.query({
            query: (id) => `/posts/${id}`,
        }),
        addCategory: builder.mutation({
            query: (banner) => ({
                url: '/category',
                method: 'POST',
                body: banner
            }),
        }),
        updateCategory: builder.mutation({
          query: ({ id, ...rest }) => ({
              url: `/category/${id}`,
              method: 'PUT',
              body: rest
            }),
        }),
        deleteCategory: builder.mutation({
          query: (id) => ({
              url: `/category/${id}`,
              method: 'DELETE',
            }),
        }),
    }), 
})
  
export const {
    useCategoriesQuery,
    useCategoryQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = categoriesApi;
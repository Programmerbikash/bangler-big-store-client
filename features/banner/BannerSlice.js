import { apiSlice } from '@/app/apiSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        banners: builder.query({
            query: () => '/banners',
            //   keepUnusedDataFor: 5,
        }),
        banner: builder.query({
            query: (id) => `/posts/${id}`,
        }),
        addBanner: builder.mutation({
            query: (banner) => ({
                url: '/banners',
                method: 'POST',
                body: banner
            }),
        }),
        updateBanner: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/banners/${id}`,
                method: 'PUT',
                body: rest
            }),
        }),
        deleteBanner: builder.mutation({
            query: (id) => ({
                url: `/banners/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})
  
export const {
    useBannersQuery,
    useBannerQuery,
    useAddBannerMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation
} = bannersApi;
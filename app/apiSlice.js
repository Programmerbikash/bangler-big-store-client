import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { HYDRATE } from 'next-redux-wrapper'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://bangler-store-server.onrender.com`,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.accessToken;
            headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    // extractRehydrationInfo(action, { reducerPath }) {
    //     if (action.type === HYDRATE) {
    //         return action.payload[reducerPath]
    //     }
    // },
    tagTypes: [],
    endpoints: (builder) => ({
    //     addUser: builder.mutation({
    //         query: ({ data, ...patch }) => ({
    //             url: `post/`,
    //             method: 'POST',
    //             body: patch,
    //         }),
    //     }),
    //    getUser:builder.query({
    //     query: ({ data, ...patch }) => ''
    //    })
    }),
});

export const { useAddUserMutation,useGetUserQuery } = apiSlice
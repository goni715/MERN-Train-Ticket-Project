import {apiSlice} from "../api/apiSlice.js";


export const classApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getClass: builder.query({
            query: ({id, from, to}) => `/class/get-class/${id}/${from}/${to}`,
            providesTags: ["Classes"]
        }),
    }),
})

export const { useGetClassQuery } = classApi;

import {apiSlice} from "../api/apiSlice.js";


export const trainApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchTrain: builder.query({
            query: ({from, to}) => `/train/search-train/${from}/${to}`,
        }),
        getTrains: builder.query({
            query: () => `/train/get-all-trains`,
        }),
    }),
})

export const { useSearchTrainQuery, useGetTrainsQuery } = trainApi;

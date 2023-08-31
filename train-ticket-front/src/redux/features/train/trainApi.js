import {apiSlice} from "../api/apiSlice.js";


export const trainApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchTrain: builder.query({
            query: ({from, to, date}) => `/train/search-train/${from}/${to}/${date}`,
        }),
        getTrains: builder.query({
            query: () => `/train/get-all-trains`,
        }),
    }),
})

export const { useSearchTrainQuery, useGetTrainsQuery } = trainApi;

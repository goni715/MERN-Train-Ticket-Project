import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {SetSuccess} from "./bogieSlice.js";


export const bogieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBogie: builder.query({
            query: (id) => `/bogie/get-bogie/${id}`,
        }),
        bookingSeat: builder.mutation({
            query: ({id, data}) => ({
                url: `/bogie/booking-seat/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    dispatch(SetSuccess(true));
                    SuccessToast("Booking Success");
                }catch(err) {
                    dispatch(SetSuccess(false));
                    ErrorToast("Booking Failed");
                }
            },
        }),
    }),
})

export const {useGetBogieQuery, useBookingSeatMutation} = bogieApi;

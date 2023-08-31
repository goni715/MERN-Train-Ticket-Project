import {apiSlice} from "../api/apiSlice.js";
import {SuccessToast} from "../../../helper/ValidationHelper.js";
import {SetAuthError, SetSeats} from "../auth/authSlice.js";


export const classApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getClass: builder.query({
            query: ({id, from, to, date}) => `/class/get-class/${id}/${from}/${to}/${date}`,
            providesTags: ["Classes"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    dispatch(SetSeats(res?.data?.totalSeats));

                }catch(err) {
                    const error = err?.error?.data?.data;
                    console.log(error)
                }
            }
        }),
    }),
})

export const { useGetClassQuery } = classApi;

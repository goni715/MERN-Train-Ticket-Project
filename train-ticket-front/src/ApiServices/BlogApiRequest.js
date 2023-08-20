import {ErrorToast, } from "../helper/ValidationHelper";
import axios from "axios";

const BaseURL = "http://localhost:5000/api";



//BlogList
export async function GetBogieRequest(ID) {
    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/bogie/get-bogie/"+ID;
        const res = await axios.get(URL);
        //store.dispatch(HideLoader())
        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                return res.data.data[0].seats;
            } else {
                return [];
            }
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
    }
}


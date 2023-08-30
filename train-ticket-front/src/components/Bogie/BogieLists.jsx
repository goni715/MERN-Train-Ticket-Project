import {useEffect, useState} from "react";
import Seats from "./Seats.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SetSuccess} from "../../redux/features/bogie/bogieSlice.js";
import {GetBogieRequest} from "../../ApiServices/BlogApiRequest.js";

const BogieLists = ({bogies}) => {
    const dispatch = useDispatch();
    const [seats, setSeats] = useState([]);
    const [bogieId, setBogiId] = useState();
    const {isSuccess} = useSelector((state)=>state.bogie) || {};




    useEffect(()=>{
        (async () => {
            if(isSuccess) {
                const result = await GetBogieRequest(bogieId);
                setSeats(result);
                dispatch(SetSuccess(false));
            }
        })();
    },[bogieId, isSuccess, dispatch])
    const handleClick = async (id) => {
        let result = await GetBogieRequest(id);
        setSeats(result);
        setBogiId(id);
    }





    return (
        <>
            <div className="d-flex gap-3">
            {bogies && (
                bogies?.map((bogie, index)=>(
                    <>
                      <button onClick={()=>handleClick(bogie?._id)} className="btn btn-primary">
                          {bogie?.name}
                       </button>
                    </>
                ))
            )

            }
            </div>

            <br/><br/>
            <div className="mt-2">
                {
                    seats.length > 0 && (
                        <Seats seats={seats}/>
                    )
                }
            </div>


        </>
    );
};

export default BogieLists;
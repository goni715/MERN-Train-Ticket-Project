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
        setSeats([]);
        let result = await GetBogieRequest(id);
        setSeats(result);
        setBogiId(id);
    }



    //bogie-sorting
    const sorting = (a,b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
    }



    return (
        <>
            <div className="d-flex gap-3">
            {bogies && (
                bogies
                .slice()
                    .sort((a,b)=>sorting(a,b))
                .map((bogie, index)=> {
                    return(
                        <>
                            <button onClick={() => handleClick(bogie?._id)} className="btn btn-primary">
                                {bogie?.name}

                                <span style={{backgroundColor: "#ab1515cf", marginLeft: "5px"}}
                                      className="badge badge-light">
                                            {bogie?.FakaSeats}
                          </span>
                            </button>
                        </>
                      )
                })
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
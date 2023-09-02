import {useParams} from "react-router-dom";
import {useBookingSeatMutation} from "../../redux/features/bogie/bogieApi.js";

const Seat = ({item}) => {
    const {id,from, to,date} = useParams();
    const [bookingSeat, {isLoading, isSuccess}] = useBookingSeatMutation();
    const {_id,unavailableDates, stations, number} = item || {};

    const handleBooking = (seatId) => {
       bookingSeat({
            seatId,
            classId:id,
            data: {
                name: "Marjan Hossain",
                date:`${date}-${from}-${to}`
            }
       })
    }


    return(
        <>
            <button
                onClick={()=>handleBooking(_id)}
                className={
                    (unavailableDates.find((cv)=> cv.date === `${date}-${from}-${to}`) || stations.includes(from) !== stations.includes(to))  && "btn btn-danger button" || "btn btn-success button"
                }
                disabled={
                    (unavailableDates.find((cv)=> cv.date === `${date}-${from}-${to}`) || stations.includes(from) !== stations.includes(to)) || isLoading
               }
            >
                {number}
            </button>
        </>
    )

};

export default Seat;
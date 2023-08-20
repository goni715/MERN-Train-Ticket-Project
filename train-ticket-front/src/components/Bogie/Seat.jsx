import {useParams} from "react-router-dom";
import {useBookingSeatMutation} from "../../redux/features/bogie/bogieApi.js";

const Seat = ({item}) => {
    const {date} = useParams();
    const [bookingSeat, {isLoading, isSuccess}] = useBookingSeatMutation();

    const handleBooking = (seatId) => {
       bookingSeat({
            id:seatId,
            data: {
                name: "Marjan Hossain",
                date:date
            }
       })

    }


    return(
        <>
            <button
                onClick={()=>handleBooking(item?._id)}
                className={item?.unavailableDates.find((cv)=> cv.date === date) && "btn btn-danger" || "btn btn-success"}
                disabled={item?.unavailableDates.find((cv)=> cv.date === date) || isLoading }
            >
                {item?.number}
            </button>
        </>
    )

};

export default Seat;
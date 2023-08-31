import {useParams} from "react-router-dom";
import {useBookingSeatMutation} from "../../redux/features/bogie/bogieApi.js";
import {useDispatch} from "react-redux";
import {SeatBook} from "../../redux/features/auth/authSlice.js";

const Seat = ({item}) => {
    const {id,date, order} = useParams();
    const dispatch = useDispatch();
    const [bookingSeat, {isLoading, isSuccess}] = useBookingSeatMutation();

    const handleBooking = (seatId) => {
       bookingSeat({
            seatId,
            classId:id,
            data: {
                name: "Marjan Hossain",
                date:`${date}-${order}`
            }
       })

        dispatch(SeatBook());
    }


    return(
        <>
            <button
                onClick={()=>handleBooking(item?._id)}
                className={item?.unavailableDates.find((cv)=> cv.date === `${date}-${order}`) && "btn btn-danger" || "btn btn-success"}
                disabled={item?.unavailableDates.find((cv)=> cv.date === `${date}-${order}`) || isLoading }
            >
                {item?.number}
            </button>
        </>
    )

};

export default Seat;
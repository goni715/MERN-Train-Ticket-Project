import Seat from "./Seat.jsx";

const Seats = ({seats}) => {
    return (
        <>
            <div className="d-flex gap-4 flex-wrap">
            {seats.length > 0 && (
                    seats.map((item, i)=>(
                        <Seat kay={i.toString()} item={item}/>
                    ))
            )}
            </div>
        </>
    );
};

export default Seats;
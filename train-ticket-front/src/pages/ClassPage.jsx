import {useParams} from "react-router-dom";
import {useGetClassQuery} from "../redux/features/class/classApi.js";
import BogieLists from "../components/Bogie/BogieLists.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import {useSelector} from "react-redux";

const ClassPage = () => {
    const {id, from, to, date} = useParams();
    const {data, isLoading, isError} = useGetClassQuery({id, from, to, date:`${date}`});
    const classData = data?.data;
    const {name, Bogies} = classData || {};
    const {vara,} = data || {};
    const {seats:totalSeats} = useSelector((state)=>state.auth);



    return (
        <>
            <Navigation/>
            <div className="px-5">
                <h1>ClassName: {name}</h1>
                <h1>Vara: {vara} Taka</h1>
                <h3>seats: {totalSeats}</h3>
                <br/> <br/>
                  <BogieLists bogies={Bogies}/>
            </div>
        </>
    );
};

export default ClassPage;
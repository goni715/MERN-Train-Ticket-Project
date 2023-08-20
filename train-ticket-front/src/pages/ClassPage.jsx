import {useParams} from "react-router-dom";
import {useGetClassQuery} from "../redux/features/class/classApi.js";
import BogieLists from "../components/Bogie/BogieLists.jsx";
import Navigation from "../components/navigation/Navigation.jsx";

const ClassPage = () => {
    const {id, from, to} = useParams();
    const {data, isLoading, isError} = useGetClassQuery({id, from, to});
    const classData = data?.data;
    const {_id, name, Bogies} = classData || {};
    const vara = data?.vara;



    return (
        <>
            <Navigation/>
            <div className="p-5">
                <h1>ClassName: {name}</h1>
                <h1>Vara: {vara} Taka</h1>
                <br/> <br/>
                  <BogieLists bogies={Bogies}/>
            </div>
        </>
    );
};

export default ClassPage;
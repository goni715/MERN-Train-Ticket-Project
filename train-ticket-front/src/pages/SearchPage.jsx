import {useSearchTrainQuery} from "../redux/features/train/trainApi.js";
import {useNavigate, useParams} from "react-router-dom";
import Navigation from "../components/navigation/Navigation.jsx";

const SearchPage = () => {
    const navigate = useNavigate();
    const {to, from, date} = useParams();
    const {data, isLoading, isError} = useSearchTrainQuery({from, to});
    const trains = data?.data;

   //decision how to render
    let content = null;

    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>;
    }

    if (!isLoading && isError) {
        content = (
           <h1>some error occured</h1>
        );
    }




    if (!isLoading && !isError && trains?.length > 0) {
        content = trains.map((item,i) => (
            <div key={i.toString()} className="p-5">
                <h1>TrainName: {item?.name}</h1>

                <div className="d-flex gap-5">
                    {item?.Classes && (
                        item?.Classes.map((clas, index)=>(
                            <>
                                <div key={index.toString()} className="d-flex flex-column">
                                    <button onClick={()=>navigate(`/class/${clas?._id}/${from}/${to}/${date}`)} className="btn btn-primary">
                                        {clas?.name}
                                    </button>
                                    <h5>{clas?.vara} Taka</h5>
                                </div>
                            </>
                        ))
                    )
                    }

                </div>
            </div>
        ));
    }


  if(!isLoading && !isError && trains?.length === 0) {
        content = <li className="m-2 text-center">No Trains found!</li>;
    }


    return (

        <>
            <Navigation/>
             {content}
        </>


    );


};

export default SearchPage;
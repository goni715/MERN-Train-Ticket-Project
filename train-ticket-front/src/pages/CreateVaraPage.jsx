import Navigation from "../components/navigation/Navigation.jsx";
import {useGetTrainsQuery} from "../redux/features/train/trainApi.js";
import {useGetClassesQuery} from "../redux/features/class/classApi.js";

const CreateVaraPage = () => {
    const {data, isLoading, isError} = useGetTrainsQuery();
    const trains = data?.data;
    const {data:classData,} = useGetClassesQuery();
    const classes = classData?.data;

    const handleChange = (id) => {

    }


    return (
        <>
            <Navigation/>
             <div className="p-3">
                 <form>
                     <div className="input-group">
                         <select onChange={(e)=>handleChange(e.target.value)}>
                             <option value="" hidden>Select Train</option>
                             {
                                 trains?.length > 0 && (
                                     trains.map((item, i)=>{
                                         return (
                                             <>
                                                 <option key={i.toString()} value={item?._id} >{item?.name}</option>
                                             </>
                                         )
                                     })
                                 )
                             }
                         </select>
                     </div>

                     <br/> <br/>

                     <div className="input-group">
                         <select onChange={(e)=>handleChange(e.target.value)}>
                             <option value="" hidden>Select Class</option>
                             {
                                 classes?.length > 0 && (
                                     classes.map((item, i)=>{
                                         return (
                                             <>
                                                 <option key={i.toString()} value={item?._id} >{item?.desc}</option>
                                             </>
                                         )
                                     })
                                 )
                             }
                         </select>
                     </div>
                 </form>
             </div>
        </>
    );
};

export default CreateVaraPage;
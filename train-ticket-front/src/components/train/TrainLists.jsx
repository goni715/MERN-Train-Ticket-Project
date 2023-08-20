import {useGetTrainsQuery} from "../../redux/features/train/trainApi.js";
import {Link, useNavigate} from "react-router-dom";
import {Table} from "antd";
import {AiFillDelete, AiOutlineEye} from "react-icons/ai";


const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Train Name",
        dataIndex: "name",
    },

    {
        title: "Action",
        dataIndex: "action",
    },
];

const TrainLists = () => {
    const {data, isLoading, isError} = useGetTrainsQuery();
    const trains = data?.data;
    const navigate = useNavigate();


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

    const tableData = [];


    if (!isLoading && !isError && trains?.length > 0) {
        for (let i = 0; i < trains.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: trains[i].name,
                action: (
                    <>
                        <button className="ms-3 fs-3 text-danger bg-transparent border-0">
                            <AiFillDelete />
                        </button>
                    </>
                ),
            });
        }

    }


    if(!isLoading && !isError && trains?.length === 0) {
        content = <li className="m-2 text-center">No Trains found!</li>;
    }



    return (
        <>
            {content}
            <div className="p-5">
                <h3 className="mb-4 title">Train Lists</h3>
                <button onClick={()=>navigate("/admin/create-train")} className="btn btn-dark float-end">Create Train</button>
                <div>
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </div>
        </>
    );
};

export default TrainLists;
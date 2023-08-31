import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="p-5 d-flex gap-5">
                <button onClick={()=>navigate("/")} className="btn btn-secondary">Front-End</button>
                <button onClick={()=>navigate("/admin")} className="btn btn-success">Admin</button>
            </div>
        </>
    );
};

export default Navigation;
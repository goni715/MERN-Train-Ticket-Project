import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ClassPage from "./pages/ClassPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CreateTrainPage from "./pages/CreateTrainPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search/:from/:to/:date" element={<SearchPage/>}/>
                    <Route path="/class/:id/:from/:to/:date/:order" element={<ClassPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/admin/create-train" element={<CreateTrainPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
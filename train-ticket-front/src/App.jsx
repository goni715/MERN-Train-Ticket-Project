import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ClassPage from "./pages/ClassPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CreateVaraPage from "./pages/CreateVaraPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search/:from/:to/:date" element={<SearchPage/>}/>
                    <Route path="/class/:id/:from/:to/:date" element={<ClassPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/admin/create-vara" element={<CreateVaraPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
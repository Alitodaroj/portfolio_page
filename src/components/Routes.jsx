import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  Resume  from "./pages/Resume";

export const MyRoutes = () => {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Resume" element={<Resume />} />
                </Routes>
        </Router>
    )
}

export default MyRoutes;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/about/About";


function RoutesCompoments(){
    return(

        <Router>
            <Routes>
                <Route path="/testing" element={<div>Testing</div>} />
                <Route path="/cadaster" element={<div>cadaster</div>} />
                <Route path="/login" element={<div>login</div>} />
            </Routes>
        </Router>
    )
}

























export default RoutesCompoments;
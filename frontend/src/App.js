import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SininPage from "./components/pages/signin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SininPage />} />
            </Routes>
        </Router>
    );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SininPage from "./components/pages/signin";
import SearchPage from "./components/pages/search";
import DashboradPage from "./components/pages/dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SininPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/dashboard" element={<DashboradPage />} />
            </Routes>
        </Router>
    );
}

export default App;

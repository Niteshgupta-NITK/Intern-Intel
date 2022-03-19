import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SininPage from "./components/pages/signin";
import SearchPage from "./components/pages/search";
import DashboradPage from "./components/pages/dashboard";
import LoginPage from "./components/pages/login";
import Mit from "./colleges/Mit";
import Ucui from "./colleges/Ucui";
import Cambridge from "./colleges/Cambridge";
import Caltech from "./colleges/Caltech";
import Oxford from "./colleges/Oxford";
import Ucberkeley from "./colleges/Ucberkeley";
import Stanford from "./colleges/Stanford";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SininPage />} />
                <Route path="/search" element={<SearchPage />}>
                    <Route path="" element={<Ucui />} />
                    <Route path="mit" element={<Mit />} />
                    <Route path="cambridge" element={<Cambridge />} />
                    <Route path="caltech" element={<Caltech />} />
                    <Route path="oxford" element={<Oxford />} />
                    <Route path="ucberkeley" element={<Ucberkeley />} />
                    <Route path="stanford" element={<Stanford />} />
                </Route>
                <Route path="/dashboard" element={<DashboradPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;

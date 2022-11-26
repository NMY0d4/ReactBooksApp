import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<AddBooks />} />
                    <Route exact path="/search" element={<SearchBooks />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

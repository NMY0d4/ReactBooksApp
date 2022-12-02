import Footer from "./components/Footer/Footer.components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.components";
import AddBooks from "./containers/addBooks/AddBooks.containers";
import SearchBooks from "./containers/searchBooks/SearchBooks.containers";

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

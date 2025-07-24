import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route path="/" Component={HomePage} />
                    <Route path="/products" Component={Products} />
                    <Route path="/about-us" Component={AboutUs} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

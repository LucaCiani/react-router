import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import HomePage from "./assets/components/HomePage";
import Products from "./assets/components/Products";
import AboutUs from "./assets/components/AboutUs";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route path="/" Component={HomePage} />
                        <Route path="/products" Component={Products} />
                        <Route path="/about-us" Component={AboutUs} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

import { Outlet, NavLink } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <div className="container my-5">
                <header className="my-5 d-flex align-items-center justify-content-center gap-5">
                    <h1>MY SHOP🛒</h1>
                    <nav className="nav">
                        <NavLink className="nav-link " to="/">
                            Home🏠
                        </NavLink>
                        <NavLink className="nav-link" to="/products">
                            Products📦
                        </NavLink>
                        <NavLink className="nav-link" to="/about-us">
                            About Usℹ️
                        </NavLink>
                    </nav>
                </header>
                <Outlet />
            </div>
        </>
    );
}

import { Outlet } from "react-router-dom";
import { NavbarComp } from "../components/layout/Navbar";

function RootLayout() {
    return (
        <>
            <NavbarComp />
            <Outlet />
        </>
    );
}

export default RootLayout;
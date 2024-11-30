import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <NavbarBs />
            <Outlet />
        </>
    );
}

export default RootLayout;
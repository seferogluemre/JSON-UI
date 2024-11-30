import { createBrowserRouter } from "react-router-dom";
import { HomePage, RootPage } from "./pages";
import UsersPage, { usersLoader } from "./pages/UsersPage";
import ErrorPage from "./pages/error-page";

const routes = [
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },

        ],
    }
]


const router = createBrowserRouter(routes);

export default router;
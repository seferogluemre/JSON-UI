import { createBrowserRouter } from "react-router-dom";
import { HomePage, RootPage } from "./pages";

const routes = [
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />,

            }

        ],
    }
]


const router = createBrowserRouter(routes);

export default router;
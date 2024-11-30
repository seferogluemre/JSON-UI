import { createRoot } from 'react-dom/client'
import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ErrorPage, UserPage, RootPage, UserDetailPage, PostDetailPage } from './pages/index'
import { usersLoader } from './pages/UsersPage/UsersPage';
import { userLoader } from './pages/UserDetailPage/UserDetail';
import { postLoader } from './pages/PostDetail/PostDetails';
import AlbumDetail, { fetchAlbumInfo } from './pages/AlbumDetail/AlbumDetail';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UserPage />,
        loader: usersLoader,
      },
      {
        path: "users/:userId",
        element: <UserDetailPage />,
        loader: userLoader,
      },
      {
        path: "users/:userId/posts/:postId",
        element: <PostDetailPage />,
        loader: postLoader,
      },
      {
        path: "users/:userId/albums/:albumId",
        loader: fetchAlbumInfo,
        element: <AlbumDetail />,
      },




    ],
  },
]);

// Render
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);
import  {Layout, RequireAuth } from "./components/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/profile/Profile";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPostPage from "./routes/newPostPage/NewPostPage.jsx";
import { singlePageLoader, listPageLoader, profilePageLoader} from "./lib/loaders.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage />,loader:listPageLoader },
        { path: "/:id", element: <SinglePage /> ,loader:singlePageLoader},
       
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },

      ],
    },
{
  path: "/",
  element: <RequireAuth />,
  children: [
    { path: "/profile", element: <Profile /> ,loader:profilePageLoader},
    { path: "/profile/update", element: <ProfileUpdatePage /> },
    { path: "/add", element: <NewPostPage /> },

  ],
},

  ]);

  return <RouterProvider router={router} />;
}

export default App;

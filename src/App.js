import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Dahsboard from "./base/Dahsboard";
import SignUp from "./Auth/SignUp";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dahsboard />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/blogs", element: <Blogs /> },
            ],
        },
        { path: "/signup", element: <SignUp /> },
    ]);

    return <RouterProvider router={router} />;
}

export default App;

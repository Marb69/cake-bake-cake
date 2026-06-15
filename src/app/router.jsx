import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />
    ,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);


export default router;
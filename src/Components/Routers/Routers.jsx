import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import ErrorPage from "../Pagges/ErrorPage";
import Home from "../Pagges/Home/Home";
import About from "../Pagges/About/About";
import BookDetails from "../Pagges/Books/BookDetails";
import LogIn from "../Pagges/LogIn/LogIn";
import Register from "../Pagges/Register/Register";
import Dashboard from "../Pagges/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Main/>,
    Component:Main,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:"/",
            // element:<h2>This is Home Page</h2>
            Component:Home
        },
        {
          path:"/about",
          Component:About
        },
        {
          path:"/login",
          Component:LogIn
        },
        {
          path:"/register",
          Component:Register
        },
        {
          path:"/dashboard",
          // Component:Dashboard
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/bookDetails/:id",
          loader:() => fetch('booksData.json'),
          Component:BookDetails
        },
    ]
  },
]);
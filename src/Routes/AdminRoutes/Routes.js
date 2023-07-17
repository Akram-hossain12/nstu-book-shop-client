import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddBook from "../../Pages/Home/AddBook/AddBook";
import BookList from "../../Pages/Home/BookList/BookList";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Sginup/Signup";
import PrivateRoute from "../PriveteRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/addbook',
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:'/',
                element:<PrivateRoute><BookList></BookList></PrivateRoute>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddBook from "../../Pages/Home/AddBook/AddBook";
import BookList from "../../Pages/Home/BookList/BookList";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Sginup/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/addbook',
                element:<AddBook></AddBook>
            },
            {
                path:'/',
                element:<BookList></BookList>
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
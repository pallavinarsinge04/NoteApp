import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.js';
import{ createBrowserRouter, RouterProvider,} from 'react-router-dom';
import Home from './views/Home/Home.js';
import Add from './views/Add/Add.js';
import Show from './views/Show/Show.js';
import { Toaster } from 'react-hot-toast';
import './index.css';


const root = ReactDOM.createRoot (document.getElementById('root'));
const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/Add",
            element:<Add/>
        },
        {
            path:"/Show",
            element:<Show/>
        },
        {
            path:"*",
            element:<h1>404 Not Found</h1>
        }
    ]
);

root.render(
    <div>
        <RouterProvider router={router}/>
        <Toaster/>
    </div>
    );
    
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AddCampaign from "../pages/AddCampaign";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRouter from "../private/PrivateRouter";
import AllCampaign from "../pages/AllCampaign";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: '/addCampaign',
                element: <PrivateRouter><AddCampaign></AddCampaign></PrivateRouter>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`),
                element: <PrivateRouter><Details></Details></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/allCampaign',
                loader: () => fetch('http://localhost:5000/campaigns'),
                element: <AllCampaign></AllCampaign>
            }
        ]
    }
])


export default routes
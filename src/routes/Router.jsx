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
import MyCampaign from "../pages/MyCampaign";
import Update from "../pages/Update";
import MyDonation from "../pages/MyDonation";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-vert-two.vercel.app/campaigns"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRouter>
            <AddCampaign></AddCampaign>
          </PrivateRouter>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-vert-two.vercel.app/campaigns/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/allCampaign",
        loader: () =>
          fetch("https://assignment-10-server-vert-two.vercel.app/campaigns"),
        element: <AllCampaign></AllCampaign>,
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRouter>
            <MyCampaign></MyCampaign>
          </PrivateRouter>
        ),
        loader: () =>
          fetch("https://assignment-10-server-vert-two.vercel.app/campaigns"),
      },
      {
        path: "/updateCampaign/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-vert-two.vercel.app/campaigns/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <Update></Update>
          </PrivateRouter>
        ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRouter>
            <MyDonation></MyDonation>
          </PrivateRouter>
        ),
        loader: () =>
          fetch("https://assignment-10-server-vert-two.vercel.app/donations"),
      },
    ],
  },
]);

export default routes;

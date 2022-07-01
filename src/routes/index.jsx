import { Outlet } from "react-router-dom";
import { HomePage, ErrorPage } from "../screens";

import { NavBar, Footer } from "../components";

const ViewWithNavAndFooter = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const routeTree = () => {
  return [
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [{ path: "", element: <HomePage /> }],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];
};
export default routeTree;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OverviewPage from "../pages/overview/OverviewPage";
import SubmitPage from "../pages/submit/SubmitPage";
import SurveyPage from "../pages/survey/SurveyPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    { path: "/", element: <SurveyPage /> },
    { path: "/overview", element: <OverviewPage /> },
    { path: "/overview/submit", element: <SubmitPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

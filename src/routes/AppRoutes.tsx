import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreviewPage from "../pages/preview/PreviewPage";
import SubmitPage from "../pages/submit/SubmitPage";
import SurveyPage from "../pages/main/SurveyPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    { path: "/", element: <SurveyPage /> },
    { path: "/preview", element: <PreviewPage /> },
    { path: "/preview/submit", element: <SubmitPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

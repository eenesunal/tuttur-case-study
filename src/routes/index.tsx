import { Navigate, useRoutes } from "react-router-dom"

import BulletinLayout from "../layouts/BulletinLayout"
import Bulletin from "../pages/Bulletin"
import PageNotFound from "components/PageNotFound"

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/bulletin/events" />,
    },
    {
      path: "/bulletin",
      element: <BulletinLayout />,
      children: [
        { element: <Navigate to="/bulletin/events" />, index: true },
        { path: "events", element: <Bulletin /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      element: <PageNotFound />,
      children: [
        { path: "404", element: <PageNotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ])

  return routes
}

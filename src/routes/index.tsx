import { Navigate, useRoutes } from "react-router-dom"

import BulletinLayout from "../layouts/BulletinLayout"
import Bulletin from "../pages/Bulletin"
import Text from "components/Text"

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/bulletin/events" />,
    },
    {
      path: "/bulletin",
      element: (
        <BulletinLayout />
      ),
      children: [
        { element: <Navigate to="/bulletin/events" />, index: true },
        { path: "events", element: <Bulletin /> },
      ],
    },
    {
      element: <div></div>,
      children: [
        { path: "404", element: <Text variant="largeTitle" css={{ color: "$red600" }}>404 not found.</Text> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ])

  return routes
}

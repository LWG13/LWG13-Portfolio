import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from "./Components/Navigation.jsx"
import Skill from "./SkillPages.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/LWG13-Portfolio/",
    element: <Navigation />,
    children: [
          {
            path:"/LWG13-Portfolio/",
            element: <App />,
          },
          {
            path: "/LWG13-Portfolio/skill",
            element: <Skill />,
          }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>

)
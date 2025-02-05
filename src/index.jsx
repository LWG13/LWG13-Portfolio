import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from "./Components/Navigation.jsx"

import Skill from "./SkillPages.jsx"


import { QueryClient, QueryClientProvider} from "react-query"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
          {
            path:"/",
            element: <App />,
          },
          {
            path: "/skill",
            element: <Skill />,
          }
    ],
  },
]);



const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(


 <QueryClientProvider client={queryClient}>
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
 </QueryClientProvider>

)
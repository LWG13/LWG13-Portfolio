import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from "./Components/Navigation.jsx"
import Service from "./Components/Service.jsx"
import Faq from "./Components/Faq.jsx"
import { QueryClient, QueryClientProvider} from "react-query"
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
            path: "/LWG13-Portfolio/service",
            element: <Service />
          },
          {
            path: "/LWG13-Portfolio/faq",
            element: <Faq />,
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

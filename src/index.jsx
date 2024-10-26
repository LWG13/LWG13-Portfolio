import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider} from "react-query"
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
 <QueryClientProvider client={queryClient}>
	<React.StrictMode>
		<App />
	</React.StrictMode>
 </QueryClientProvider>
)
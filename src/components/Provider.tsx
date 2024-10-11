import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contacts from './pages/Contacts'
import App from '../App'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/contacts',
		element: <Contacts />,
	},
])

const Provider = () => {
	return <RouterProvider router={router} />
}

export default Provider

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import Login from '../page/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '*',
		element: <h1>Not found page</h1>,
	},
]);

export default router;
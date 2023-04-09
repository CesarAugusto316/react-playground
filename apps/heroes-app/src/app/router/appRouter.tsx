import { Navigate, createBrowserRouter } from 'react-router-dom';

// route based code-splitting
import Marvel from '../heroes/pages/marvel/marvel';
import DC from '../heroes/pages/dc/dc';
import Login from '../auth/pages/login/login';
import HeroesApp from '../heroes/heroesApp';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesApp />,
    children: [
      {
        path: 'marvel',
        element: <Marvel />
      },
      {
        path: 'dc',
        element: <DC />
      },
    ]
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/marvel" />
  }
])

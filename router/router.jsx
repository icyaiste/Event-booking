import { createBrowserRouter } from 'react-router-dom';

import Events from './pages/events';
import Ticket from './pages/ticket';
import Buy from './pages/buy';
import ErrorPage from './pages/errorPage';

const router = createBrowserRouter([
    {
      path: '/events',
      element: <Events />
    },
    {
      path: '/buy',
      element: <Buy />
    },
    {
        path: '/ticket',
        element: <Ticket />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router

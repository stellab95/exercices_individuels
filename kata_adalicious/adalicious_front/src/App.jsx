import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import OrderTrackingPage from './components/OrderTrackingPage'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/ordertrackingpage',
    element: <OrderTrackingPage />
  },
  {
  path: '/menupage',
  element: <MenuPage />
}
])

function App() {
  return <RouterProvider router={router} />
}

export default App


import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import DashboardLayout from '@/layouts/DashboardLayout'
import HomePage from '@/pages/HomePage'
import BooksPage from '@/pages/BooksPage'
import BookCreate from '@/pages/BookCreate'
import AuthLayout from '@/layouts/AuthLayout'

const router = createBrowserRouter([

    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'books',
                element: <BooksPage />
            },
            {
                path: 'add/book',
                element: <BookCreate />
            }
        ]
    },

    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }

])

export default router

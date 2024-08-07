import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/theme.scss';
import '@fontsource-variable/work-sans';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from 'components/layout/layout.tsx';
import Page from 'src/pages/website/page.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Page />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Toaster
            position="bottom-center"
            containerStyle={{
                bottom: 60,
            }}
            toastOptions={{ success: { duration: 2000 }, error: { duration: 3000 } }}
        />
        <RouterProvider router={router} />
    </React.StrictMode>,
);

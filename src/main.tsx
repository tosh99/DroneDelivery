import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/theme.scss';
import '@fontsource-variable/inter-tight';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from 'components/layout/layout.tsx';
import Page from 'src/pages/website/page.tsx';
import { ParallaxProvider } from 'react-scroll-parallax';

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
        <ParallaxProvider>
            <RouterProvider router={router} />
        </ParallaxProvider>
    </React.StrictMode>,
);

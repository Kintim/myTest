import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RouterProvider } from 'react-router5'
import createRouter from './components/create-router'

const router = createRouter()

router.start(() => {
    ReactDOM.render(
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>,
        document.getElementById('root')
    )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

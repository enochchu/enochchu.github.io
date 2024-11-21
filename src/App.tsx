import React from 'react';
import './App.css';
import {HomePage} from "./pages/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SearchableResumePage from "./pages/SearchableResumePage";
import {RESUME_ENOCH_ONLINE_ONLY} from "./constants/Constants";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/resume",
        element: <SearchableResumePage resume={ RESUME_ENOCH_ONLINE_ONLY } />
    }
])

function App() {
  return (
    <div className="App" data-testid="App">
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </div>
  );
}

export default App;

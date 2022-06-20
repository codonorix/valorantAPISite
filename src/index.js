import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import NavBar from "./permpages/navbar/NavBar";
import Agents from "./pages/agents/Agents";
import Buddies from "./pages/buddies/Buddies";
import Bundles from "./pages/bundles/Bundles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <NavBar id={'navBar'}/>
            <Routes>
                {/*Basic routs that allow the page to be deemed loaded. These are for the main pages*/}
                <Route path={"/*"} element={<HomePage/>}/>
                <Route path={"/agents/*"} element={<Agents/>}/>
                <Route path={"/buddies"} element={<Buddies/>}/>
                <Route path={"/bundles"} element={<Bundles/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);


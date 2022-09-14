import React from "react";
import {
    Route, Routes,
} from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/home/home";
const routeApp: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} ></Route>
        </Routes>
    );
}

export default routeApp;
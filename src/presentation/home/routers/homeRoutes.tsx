import React from "react";
import {
    Route, Routes,
} from "react-router-dom";
import Layout from "../../commons/layouts";
import Home from '../pages/home';

const HomeRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} ></Route>
        </Routes>
    );
}

export default HomeRoute;
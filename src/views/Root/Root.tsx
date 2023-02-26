import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from "../../components/Welcome/Welcome";
import DataTable from "../../components/DataTable/DataTable";

function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/datatable" element={<DataTable/>}/>
            </Routes>
        </Router>
    );
}

export default Root;

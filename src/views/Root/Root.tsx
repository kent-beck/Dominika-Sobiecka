import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from "../../components/Welcome/Welcome";
import DataTable from "../../components/DataTable/DataTable";
import DataElement from "../../components/DataElement/DataElement";

function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/datatable" element={<DataTable/>}/>
                <Route path='/dataelement/:beerId' element={<DataElement/>}/>
            </Routes>
        </Router>
    );
}

export default Root;

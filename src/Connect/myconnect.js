import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employee from './employee';
import Login from './login';
import Admin from './admin';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employee" element={<Employee/>} />
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </Router>
    );
};

export default App;

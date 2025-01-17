import React from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import './final.css'; // Optional styling

const Summary = () => {
    const location = useLocation();
    const { customer, vehicle, driver, tripType, startLocation, endLocation, totalKM, totalAmount, startDate, endDate, tripStatus } = location.state || {}; 
    const navigate = useNavigate();

    const handleInfo = () => {
        navigate('/');
    }

    return (
        <div className="data">
            
            <h2>Booking Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Vehicle Name</th>
                        <th>Driver Name</th>
                        <th>Trip Type</th>
                        <th>Start Location</th>
                        <th>End Location</th>
                        <th>Approx Total KM</th>
                        <th>Total Amount</th>
                        <th>Trip Start Date</th>
                        <th>Trip End Date</th>
                        <th>Trip Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customer}</td>
                        <td>{vehicle}</td>
                        <td>{driver}</td>
                        <td>{tripType}</td>
                        <td>{startLocation}</td>
                        <td>{endLocation}</td>
                        <td>{totalKM}</td>
                        <td>{totalAmount}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{tripStatus}</td>
                    </tr>
                </tbody>
            </table>

            <Button variant="contained" color="primary" onClick={handleInfo}>Back To Info</Button>
        </div>
    );
};

export default Summary;

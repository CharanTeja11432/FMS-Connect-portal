import React, { useState } from "react";
import {
    Dashboard as DashboardIcon,
    NotificationsActive as NotificationsActiveIcon,
    LocalShipping as LocalShippingIcon,
    CheckCircle as CheckCircleIcon,
    ListAlt as ListAltIcon,
} from '@mui/icons-material';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ConstructionIcon from '@mui/icons-material/Construction';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import traffic from "../Booking/traffic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleQuestion, faBell } from '@fortawesome/free-solid-svg-icons';
import Ryukendo from '../Booking/motu.png';
import './booking.css';

const Booking = () => {
    const [customer, setCustomer] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [driver, setDriver] = useState('');
    const [tripType, setTripType] = useState('');
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [totalKM, setTotalKM] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tripStatus, setTripStatus] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const menuItems = [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <ListAltIcon />, label: "Bookings",item1:"booking list",item2:"Add Booking List" },
        { icon: <NotificationsActiveIcon />, label: "Notifications" },
        { icon: <LocalShippingIcon />, label: "Vehicle",item3:"Add Vehicle list" },
        { icon: <CheckCircleIcon />, label: "Drivers",item4:"Add Driver List" },
        { icon: <LocalGasStationIcon />, label: "Fuel",item5:"Add Fuel Management" },
        { icon: <ConstructionIcon />, label: "Maintainance",item6:"Add Maintainance List" },
        { icon: <ManageAccountsIcon />, label: "Users & Roles",item7:"Add users",item8:"Add Roles" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});

        let newErrors = {};
        if (!customer) newErrors.customer = '*Please enter the customer name';
        if (!vehicle) newErrors.vehicle = '*Please enter the vehicle name';
        if (!driver) newErrors.driver = '*Please enter the driver name';
        if (!tripType) newErrors.tripType = '*Please select a trip type';
        if (!startLocation) newErrors.startLocation = '*Please enter a start location';
        if (!endLocation) newErrors.endLocation = '*Please enter an end location';
        if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please enter valid total KM';
        if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) newErrors.totalAmount = '*Please enter valid total amount';
        if (!startDate) newErrors.startDate = '*Please select a trip start date';
        if (!endDate) newErrors.endDate = '*Please select a trip end date';
        if (endDate && startDate && new Date(endDate) < new Date(startDate)) newErrors.endDate = '*End date must be after start date';
        if (!tripStatus) newErrors.tripStatus = '*Please select a trip status';

        if (Object.keys(newErrors).length === 0) {
            const finalData = { customer, vehicle, driver, tripType, startLocation, endLocation, totalKM, totalAmount, startDate, endDate, tripStatus };
            navigate('/final', { state: finalData });
        } else {
            setErrors(newErrors);
        }
    };

    const handleInputChange = (setter, field) => (event) => {
        setter(event.target.value);
        if (errors[field]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: undefined,
            }));
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="employee-container col-12">
                    <div className="left">
                        <div className="header">
                            <img src={traffic} className="ml-3 mb-4" alt="logo"/>
                            <h3>FMS</h3>
                        </div>
                        <nav>
                            {menuItems.map((item, index) => (
                                // <div key={index}>
                                //     <p>{item.icon} {item.label}</p>
                                // </div>
                                <div>
                                    <a class="btn dashboard-button" data-toggle="collapse" href={"#"+item.label} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        {item.icon}{item.label}
                                    </a>
                                    <div class="collapse" id={item.label}>
                                        <div class="card cardbody bg-dark">
                                            <div>
                                                <div>
                                                    <a href="/">{item.item1}</a>
                                                </div>
                                                <div>
                                                <a href="/final">{item.item2}</a>
                                                </div>
                                                <div>
                                                <a href="/vehiclelist">{item.item3}</a>
                                                </div>
                                                <div>
                                                <a href="/driver">{item.item4}</a>
                                                </div>
                                                <div>
                                                <a href="/fuel">{item.item5}</a>
                                                </div>
                                                <div>
                                                    <a href="/management">{item.item6}</a>
                                                </div>
                                                <div>
                                <a href="/users">{item.item7}</a>
                            </div>
                            <div>
                                <a href="/roles">{item.item8}</a>
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            ))}
                        </nav>
                    </div>
                    <div className="right-container">
                        <div className="header-1">
                            <span className="icon-left">
                                <FontAwesomeIcon icon={faBars} size="lg" /> 
                            </span>
                            <div className="right-icons">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faBell} size="lg" /> 
                                </span>
                                <div className="user-avatar">
                                    <img src={Ryukendo} alt="User Avatar" className="user-image" />
                                    Motu
                                </div>
                            </div>
                        </div>
                        
                       <div className="col-12 d-flex justify-content-between">
                       <h3>Bookings</h3>
                        <div className="d-flex" >
            <span>Dashboard</span> &gt; <span>Bookings</span> &gt; <span className="active">Booking List</span>
          </div>
          </div>
                        <form onSubmit={handleSubmit} >
                            <div className="formtype">
                            <div className="bgwhite">
                            <div className="row">
                                
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Customer Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Customer Name" value={customer} onChange={handleInputChange(setCustomer, 'customer')} />
                                    {errors.customer && <div className='error-message'>{errors.customer}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Vehicle Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Vehicle Name" value={vehicle} onChange={handleInputChange(setVehicle, 'vehicle')} />
                                    {errors.vehicle && <div className='error-message'>{errors.vehicle}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Driver Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Driver Name" value={driver} onChange={handleInputChange(setDriver, 'driver')} />
                                    {errors.driver && <div className='error-message'>{errors.driver}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Trip Type</label>
                                    <select className="form-control" value={tripType} onChange={(e) => {
                                        setTripType(e.target.value);
                                        if (errors.tripType) {
                                            setErrors((prevErrors) => ({
                                                ...prevErrors,
                                                tripType: undefined,
                                            }));
                                        }
                                    }}>
                                        <option value="">Enter Trip Type</option>
                                        <option value="Solo Trip">Solo Trip</option>
                                        <option value="Road Trip">Road Trip</option>
                                        <option value="Adventure Trip">Adventure Trip</option>
                                        <option value="Devotional Damaka">Devotional Damaka</option>
                                        <option value="Animal Safari">Animal Safari</option>
                                        <option value="Train Trip">Train Trip</option>
                                        <option value="Water Ways">Water Ways</option>
                                    </select>
                                    {errors.tripType && <div className='error-message'>{errors.tripType}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Trip Start Location</label>
                                    <input type="text" className="form-control" placeholder="Enter Start Location" value={startLocation} onChange={handleInputChange(setStartLocation, 'startLocation')} />
                                    {errors.startLocation && <div className='error-message'>{errors.startLocation}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Trip End Location</label>
                                    <input type="text" className="form-control" placeholder="Enter End Location" value={endLocation} onChange={handleInputChange(setEndLocation, 'endLocation')} />
                                    {errors.endLocation && <div className='error-message'>{errors.endLocation}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Approx Total KM</label>
                                    <input type="number" className="form-control" placeholder="Enter Total KM" value={totalKM} onChange={handleInputChange(setTotalKM, 'totalKM')} />
                                    {errors.totalKM && <div className='error-message'>{errors.totalKM}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Trip Start Date</label>
                                    <input type="date" className="form-control" value={startDate} onChange={handleInputChange(setStartDate, 'startDate')} />
                                    {errors.startDate && <div className='error-message'>{errors.startDate}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Trip End Date</label>
                                    <input type="date" className="form-control" value={endDate} onChange={handleInputChange(setEndDate, 'endDate')} />
                                    {errors.endDate && <div className='error-message'>{errors.endDate}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Total Amount</label>
                                    <input type="number" className="form-control" placeholder="Total Amount" value={totalAmount} onChange={handleInputChange(setTotalAmount, 'totalAmount')} />
                                    {errors.totalAmount && <div className='error-message'>{errors.totalAmount}</div>}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                    <label>Trip Status</label>
                                    <select value={tripStatus} className="form-control" onChange={(e) => {
                                        setTripStatus(e.target.value);
                                        if (errors.tripStatus) {
                                            setErrors((prevErrors) => ({
                                                ...prevErrors,
                                                tripStatus: undefined,
                                            }));
                                        }
                                    }}>
                                        <option value="">Status of Trip</option>
                                        <option value="Planned">Planned</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Rejected">Rejected</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                        <option value="In Progress">In Progress</option>
                                    </select>
                                    {errors.tripStatus && <div className='error-message'>{errors.tripStatus}</div>}
                                   
                                </div>
                                <div className="col-12 col-md-12 col-lg-12  d-flex mb-3">
                                        <input type="checkbox" className="me-2 mr-2" />
                                         <p className="mb-0" >Is need to send Booking confirmation email to customer?</p>
                                    </div>
                            </div>
                            </div>
                            <div className="form-actions">
                                <Button type="submit" className="submit" >Submit</Button>
                                <Button type="button" className="clear" variant="outlined" onClick={() => {
                                    setCustomer('');
                                    setVehicle('');
                                    setDriver('');
                                    setTripType('');
                                    setStartLocation('');
                                    setEndLocation('');
                                    setTotalKM('');
                                    setTotalAmount('');
                                    setStartDate('');
                                    setEndDate('');
                                    setTripStatus('');
                                    setErrors({});
                                }}>Clear</Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

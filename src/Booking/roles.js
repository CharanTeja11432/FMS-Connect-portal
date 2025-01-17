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
import {  useNavigate } from "react-router-dom";
import traffic from "../Booking/traffic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleQuestion, faBell } from '@fortawesome/free-solid-svg-icons';
import Ryukendo from '../Booking/motu.png';
import './booking.css';

// const today = new Date().toISOString().split('T')[0];

const Users = () => {
    const [registration, setRegistration] = useState('');
    const [chasis, setChasis] = useState('');
   
    const [focusField, setFocusField] = useState(null);
   
    
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const menuItems = [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <ListAltIcon />, label: "Bookings", item1: "booking list", item2: "Add Booking List" },
        { icon: <NotificationsActiveIcon />, label: "Notifications" },
        { icon: <LocalShippingIcon />, label: "Vehicle", item3: "Add Vehicle list" },
        { icon: <CheckCircleIcon />, label: "Drivers",item4:"Add Driver List" },
        { icon: <LocalGasStationIcon />, label: "Fuel",item5:"Add Fuel Management" },
        { icon: <ConstructionIcon />, label: "Management",item6:"Add Management List" },
        { icon: <ManageAccountsIcon />, label: "Users & Roles",item7:"Add users",item8:"Add Roles" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});

        let newErrors = {};
       

    if (!registration) newErrors.registration = '*Please Select Role';
   
       
        if (!chasis) newErrors.chasis = '*Please Select CheckBox';

        if (Object.keys(newErrors).length === 0) {
            const finalData = { registration,  chasis};
            navigate('/final', { state: finalData });
        } else {
            setErrors(newErrors);
        }
    };
    const handleInputChange = (setter, field) => (event) => {
        let value = event.target.value;
    
        
        if (field === 'registration') {
            value = value.replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters
        }
    
        setter(value);
        if (errors[field]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: undefined,
            }));
        }
    };
   
    const handleFocus = (field) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: '',
        }));
        setFocusField(field); // Set the focused field
    };
    
    const handleBlur = (field) => {
        const newErrors = {};
        const registrationPattern = /^[a-zA-Z0-9]+$/;
       
        if (field === 'registration') {
            if (!registration) newErrors.registration = '*Please Select Role';
            else if (!registrationPattern.test(registration)) newErrors.registration = '*Registration can only contain letters and numbers';
        }
       
        if (field === 'chasis') {
            if (!chasis) newErrors.chasis = '*Please Enter Password   ';
        }
       
       
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...newErrors,
        }));
    };
    
 
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="employee-container col-12 bg-white">
                <div className="left">
    <div className="header">
        <img src={traffic} className="ml-3 mb-4" alt="logo" />
        <h3>FMS</h3>
    </div>
    <nav>
        {menuItems.map((item, index) => (
            <div key={index}>
                <a
                    className="btn dashboard-button"
                    data-toggle="collapse"
                    href={"#" + item.label}
                    role="button"
                    aria-expanded="false"
                    aria-controls={item.label}
                >
                    {item.icon} {item.label}
                </a>
                <div className="collapse" id={item.label}>
                    <div className="card cardbody bg-dark">
                        <div  >
                            <div>
                                <a  href="/">{item.item1}</a>
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
                                <a href="/driver">{item.item6}</a>
                            </div>
                            <div>
                                <a href="/users">{item.item7}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </nav>
</div>

                    <div className="right-container">
                        <div className="header-1 ">
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
                            <h3>Users & Roles</h3>
                            <div className="d-flex">
                                <span>Dashboard</span> &gt; <span>Users & Roles</span> &gt; <span className="active">Add Users</span>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='formtype'>
                                <div className="bgwhite">
                                    <h5>Add Roles</h5>
                                    <div className="row mt-3 ">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Roles Title</label>
                                            {/* <input type="text" className={`form-control ${focusField === 'registration' ? 'focused' : ''}`}  
                                            placeholder="Enter Vehicle Name"  value={registration} onChange={handleInputChange(setRegistration, 'registration')}  onKeyDown={handleKeyDown} onFocus={() => handleFocus('registration')}
                                            onBlur={() => handleBlur('registration')} /> */}
                                             <select className={`form-control ${focusField === 'registration' ? 'focused' : ''}`}
                                            onFocus={() => handleFocus('registration')} onBlur={() => handleBlur('registration')}
                                             value={registration} onChange={handleInputChange(setRegistration, 'registration')}>
                                                <option value="">Select Type</option>
                                                <option value="Group1">Manager</option>
                                                <option value="Group2">Team lead</option>
                                                <option value="Group3">Employee</option>
                                            </select>
                                            {/* {errors.registration && <div className='error-message'>{errors.registration}</div>} */}
                                        </div>
                                    
                                    </div>
                                    <div className="row ml-1 mt-4">
                                        <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Manage User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Manage User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete User
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Show Client
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* //3rd-row */}
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Manage Driver
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Driver
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Driver
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Driver
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Show Driver
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* 4th--row */}

                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Manage Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Show Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* 5th--roww */}
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        {/* <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            {/* Manage User
                                        </label> */}
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Show Vehicle 
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* 6th--row */}
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Booking
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Show Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* 7--row */}
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Booking
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Show Booking
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* 8-row */}
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Fuel
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create fuel
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Fuel
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Fuel
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        {/* <label className="form-check-label">
                
                                            // <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            {/* // Show Client */}
                                        {/* </label> */} 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Expense
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Expanse
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Expanse
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Expanse
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        {/* <label className="form-check-label"> */}
                
                                            {/* <input type="checkbox" className="form-check-input mt-2" /> Add margin to space it out */}
                                            {/* Show Client */}
                                        {/* </label> */}
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Contact
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Create Contact
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Edit Contact
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 check">
                                        <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            Delete Contact
                                        </label>
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 ">
                                        {/* <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                            {/* Show Client */}
                                        {/* </label> */} 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>} */}
                                    </div>
                                    </div>
                                    </div>

                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 ">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Pricing
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    </div>
                                   
                                   {/* ndubwdxh */}
                                   <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 ">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Account setting
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    </div>
                                    {/* lkhdxbhx */}
                                    <div className="row mt-5 ml-1">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 ">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage general setting
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    </div>

                                    {/* kljbkbhdx */}
                                    <div className="row mt-5 ml-1 mb-3">
                                    <div className="d-flex flex-wrap">
                                    <div className="form-check col-12 ">
                                         <label className="form-check-label">
                
                                            <input type="checkbox" className="form-check-input mt-2" /> {/* Add margin to space it out */}
                                             Manage Password setting
                                        </label> 
                                        {/* {errors.chasis && <div className='error-message'>{errors.chasis}</div>}  */}
                                    </div>
                                    </div>
                                    </div>
                                </div>
                               
                               
                    
                            </div>
                                      
                            <div className="d-flex ">
                                
                                <Button type="submit" variant="contained" color="primary" style={{marginLeft:'40px'}}>Submit</Button>
                                <Button type="button" variant="contained" color="secondary" className="clear"  onClick={() => {
                                setRegistration('');
                                
                                setChasis('');
                                
                                setErrors({});
                            }}>Clear</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;

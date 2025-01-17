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
    const [vehicle, setVehicle] = useState('');
    const [driver, setDriver] = useState(''); 
    const [chasis, setChasis] = useState('');
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [totalKM, setTotalKM] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tripStatus, setTripStatus] = useState('');
   
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
   
        if (!vehicle) newErrors.vehicle = '*Please Select the Maintainance Start Date';
        if (!driver) newErrors.driver = '*Please Enter The Email Id';
        if (!chasis) newErrors.chasis = '*Please Enter the Password';
        if (!startLocation) newErrors.startLocation = '*Please Enter Parts Name';
        if (!endLocation) newErrors.endLocation = '*Please enter Name';
        if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please select vehicle type';
        if (!totalAmount) newErrors.totalAmount = '*Please Select Quantity';
        if (!startDate) newErrors.startDate = '*Please Select Mainainance Status';
        if (!endDate) newErrors.endDate = '*Please Enter The Phone Number';
        if (!tripStatus) newErrors.tripStatus = '*Please select Driver Status';
       
       
      
        if (Object.keys(newErrors).length === 0) {
            const finalData = { registration, vehicle, driver, chasis, startLocation, endLocation, totalKM, totalAmount, startDate, endDate, tripStatus};
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
    
    const handleKeyDown = (event) => {
        const charCode = event.which || event.keyCode;
    
        // Allow control keys (backspace, delete, tab, etc.)
        if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
            return; // Allow backspace, tab, enter, escape, and arrow keys
        }
    
        // Allow only uppercase letters (A-Z), numbers (0-9), and space (keyCode 32)
        if (
            
            !(charCode >= 65 && charCode <= 90) && // A-Z
            charCode !== 32 // space
        ) {
            event.preventDefault(); // Prevent input for other characters
        }
    };

    const handleVehicleNameKeyDown = (event) => {
        const charCode = event.which || event.keyCode;
    
        // Allow control keys (backspace, delete, tab, etc.)
        if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
            return; // Allow backspace, tab, enter, escape, and arrow keys
        }
    
        // Allow only letters (A-Z, a-z)
        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            event.preventDefault(); // Prevent input for other characters
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
        if (field === 'vehicle') {
            if (!vehicle) newErrors.vehicle = '*Please Enter Email Id';
        }
        if (field === 'driver') {
            if (!driver) newErrors.driver = '**Please Enter Email Id';
        }
        if (field === 'chasis') {
            if (!chasis) newErrors.chasis = '*Please Enter Password   ';
        }
        if (field === 'startLocation') {
            if (!startLocation) newErrors.startLocation = '*Please Enter Parts name';
        }
        if (field === 'endLocation') {
            if (!endLocation) newErrors.endLocation = '*Please enter Name';
        }
        if (field === 'totalKM') {
            if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please Select Vehicle Group';
        }
        if (field === 'totalAmount') {
            if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) newErrors.totalAmount = '*Please Select Quantity';
        }
        if (field === 'startDate') {
            if (!startDate) newErrors.startDate = '*Please Select maintainance status';
        }
        if (field === 'endDate') {
            if (!endDate) newErrors.endDate = '*Please Enter Phone Number';
        }
        if (field === 'tripStatus') {
            if (!tripStatus) newErrors.tripStatus = '*Please select Driver type';
        }
        
       
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...newErrors,
        }));
    };
    const handleAge = (event) => {
        let newValue = event.target.value;
    
        
        const isValid = /^[0-9]*$/.test(newValue);
        if (!isValid) {
            newValue = newValue.replace(/[^0-9]/g, ''); 
        }
    
        // Limit to 10 digits
        if (newValue.length > 10) {
            newValue = newValue.slice(0, 10);
        }
    
        event.target.value = newValue;
    };

    const handleInput = (setter, field) => (event) => {
        const { value } = event.target;
        setter(value); // Update the state with the current value
    
        // Simple validation for @gmail.com
        if (!value.endsWith('@gmail.com')) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: 'Email must end with @gmail.com',
            }));
        } else {
            // Clear error if valid
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: null,
            }));
        }
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
                        <div >
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
                                    <h5>Add Users</h5>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label> Assign Roles</label>
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
                                            {errors.registration && <div className='error-message'>{errors.registration}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Name</label>
                                            <input type="text" className={`form-control ${focusField === 'endLocation' ? 'focused' : ''}`}
                                             placeholder="Mr Name" value={endLocation} onChange={handleInputChange(setEndLocation, 'endLocation')} onKeyDown={handleVehicleNameKeyDown} onInput={handleKeyDown}
                                             onFocus={() => handleFocus('endLocation')} onBlur={() => handleBlur('endLocation')}/>
                                            {errors.endLocation && <div className='error-message'>{errors.endLocation}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>User Email</label>
                                            <input type="email" className={`form-control ${focusField === 'driver' ? 'focused' : ''}`}
                                             placeholder="Enter Email" value={driver} onChange={handleInput(setDriver, 'driver')}  
                                             onFocus={() => handleFocus('driver')} onBlur={() => handleBlur('driver')}/>
                                            {errors.driver && <div className='error-message'>{errors.driver}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>User Password</label>
                                            <input type="text" className={`form-control ${focusField === 'chasis' ? 'focused' : ''}`}
                                             placeholder="Enter Password" value={chasis} onChange={handleInputChange(setChasis, 'chasis')} 
                                             onFocus={() => handleFocus('chasis')} onBlur={() => handleBlur('chasis')}/>
                                            {errors.chasis && <div className='error-message'>{errors.chasis}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label> user Phone Number</label>
                                            <input type="text"  className={`form-control ${focusField === 'endDate' ? 'focused' : ''}`}
                                            value={endDate} placeholder="enter your Number" onChange={handleInputChange(setEndDate, 'endDate')} onInput={handleAge}
                                            onFocus={() => handleFocus('endDate')} onBlur={() => handleBlur('endDate')}/>
                                            {errors.endDate && <div className='error-message'>{errors.endDate}</div>}
                                        </div>
                                       
                                        
                                    </div>
                                   
                                </div>
                               
                               
                    
                            </div>
                                      
                            <div className="d-flex ">
                                
                                <Button type="submit" variant="contained" color="primary" style={{marginLeft:'40px'}}>Submit</Button>
                                <Button type="button" variant="contained" color="secondary" className="clear"  onClick={() => {
                                setRegistration('');
                                setVehicle('');
                                setDriver('');
                                setChasis('');
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;

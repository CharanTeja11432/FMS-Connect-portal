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

const Vehiclelist = () => {
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
       

    if (!registration) newErrors.registration = '*Please Select vehicle';
   
        if (!vehicle) newErrors.vehicle = '*Please Select the Maintainance Start Date';
        if (!driver) newErrors.driver = '*Please Select the Maintainance End Date';
        if (!chasis) newErrors.chasis = '*Please Select Service Details';
        if (!startLocation) newErrors.startLocation = '*Please Enter Parts Name';
        if (!endLocation) newErrors.endLocation = '*Please enter Vendor Name';
        if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please select vehicle type';
        if (!totalAmount) newErrors.totalAmount = '*Please Select Quantity';
        if (!startDate) newErrors.startDate = '*Please Select Mainainance Status';
        if (!endDate) newErrors.endDate = '*Please Enter The Cost';
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
    
    // const handleChasiskey = (event) => {
    //     const charCode = event.which || event.keyCode;
    
    //     // Allow control keys (backspace, delete, tab, etc.)
    //     if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
    //         return; 
    //     }
    
    //     // Allow only alphabetic characters (A-Z, a-z)
    //     if (
    //         !(charCode >= 48 && charCode <= 57) && // 0-9 
    //         !(charCode >= 65 && charCode <= 90) && // A-Z
    //         charCode !== 32)
    //          { // a-z
    //         event.preventDefault(); 
    //     }
    // };
    
    
    
    // const handleNumberkey = (event) => {
    //     const charCode = event.which || event.keyCode;
    
    //     // Allow control keys (backspace, delete, tab, etc.)
    //     if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
    //         return; // Allow backspace, tab, enter, escape, and arrow keys
    //     }
    
    //     // Allow only numbers (0-9)
    //     if ( !(charCode >= 65 && charCode <= 90)&& charCode !== 32 ) { // 0-9
    //         event.preventDefault(); // Prevent input for other characters
    //     }
    // };

   
   
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
            if (!registration) newErrors.registration = '*Please Select the vehicle';
            else if (!registrationPattern.test(registration)) newErrors.registration = '*Registration can only contain letters and numbers';
        }
        if (field === 'vehicle') {
            if (!vehicle) newErrors.vehicle = '*Please Select maintainance start date';
        }
        if (field === 'driver') {
            if (!driver) newErrors.driver = '*Please Select maintainance end date';
        }
        if (field === 'chasis') {
            if (!chasis) newErrors.chasis = '*Please Enter Service Details   ';
        }
        if (field === 'startLocation') {
            if (!startLocation) newErrors.startLocation = '*Please Enter Parts name';
        }
        if (field === 'endLocation') {
            if (!endLocation) newErrors.endLocation = '*Please enter vendor Name';
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
            if (!endDate) newErrors.endDate = '*Please Enter Cost';
        }
        if (field === 'tripStatus') {
            if (!tripStatus) newErrors.tripStatus = '*Please select Driver type';
        }
        
       
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...newErrors,
        }));
    };
    // const handleChange = (event) => {
    //     let newValue = event.target.value;
    
       
    //     const isValid = /^[0-9]*$/.test(newValue);
    //     if (!isValid) {
    //         newValue = newValue.replace(/[^0-9]/g, '');
    //     }
    
    //     // Limit to 10 digits
    //     if (newValue.length > 10) {
    //         newValue = newValue.slice(0, 10);
    //     }
    
    //     event.target.value = newValue;
    // };

    const handleAge = (event) => {
        let newValue = event.target.value;
    
        
        const isValid = /^[0-9]*$/.test(newValue);
        if (!isValid) {
            newValue = newValue.replace(/[^0-9]/g, ''); 
        }
    
        // Limit to 10 digits
        if (newValue.length > 5) {
            newValue = newValue.slice(0, 5);
        }
    
        event.target.value = newValue;
    };
   
    // const handleCases = (event) => {
    //     let newValue = event.target.value;
    //     const isValid = /^[A-Z0-9 ]*$/.test(newValue);
    //     if (!isValid) {
    //         newValue = newValue.replace(/[^A-Z0-9 ]/g, '');
    //     }
    //     if (newValue.length > 16) {
    //         newValue = newValue.slice(0, 16);
    //     }
    
        
    //     event.target.value = newValue;
    // }


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
                            <h3>Maintainance</h3>
                            <div className="d-flex">
                                <span>Dashboard</span> &gt; <span>Maintainance</span> &gt; <span className="active">Add Maintainance</span>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='formtype'>
                                <div className="bgwhite">
                                    <h5>Add Maintainance List</h5>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label> Select Vehicle</label>
                                            {/* <input type="text" className={`form-control ${focusField === 'registration' ? 'focused' : ''}`}  
                                            placeholder="Enter Vehicle Name"  value={registration} onChange={handleInputChange(setRegistration, 'registration')}  onKeyDown={handleKeyDown} onFocus={() => handleFocus('registration')}
                                            onBlur={() => handleBlur('registration')} /> */}
                                             <select className={`form-control ${focusField === 'registration' ? 'focused' : ''}`}
                                            onFocus={() => handleFocus('registration')} onBlur={() => handleBlur('registration')}
                                             value={registration} onChange={handleInputChange(setRegistration, 'registration')}>
                                                <option value="">Select Type</option>
                                                <option value="Group1">2 wheeler</option>
                                                <option value="Group2">3 wheeler</option>
                                                <option value="Group3">4 wheeler</option>
                                            </select>
                                            {errors.registration && <div className='error-message'>{errors.registration}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Maintainance Start date</label>
                                            <input type="date" className={`form-control ${focusField === 'vehicle' ? 'focused' : ''}`}
                                             placeholder="Enter Driver" value={vehicle}  onChange={handleInputChange(setVehicle, 'vehicle')} onKeyDown={handleKeyDown}   
                                             onFocus={() => handleFocus('vehicle')} onBlur={() => handleBlur('vehicle')}/>
                                            {errors.vehicle && <div className='error-message'>{errors.vehicle}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Maintainance End Date</label>
                                            <input type="Date" className={`form-control ${focusField === 'driver' ? 'focused' : ''}`}
                                             placeholder="Enter Date" value={driver} onChange={handleInputChange(setDriver, 'driver')} onKeyDown={handleVehicleNameKeyDown} 
                                             onFocus={() => handleFocus('driver')} onBlur={() => handleBlur('driver')}/>
                                            {errors.driver && <div className='error-message'>{errors.driver}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Service Details</label>
                                            <input type="text" className={`form-control ${focusField === 'chasis' ? 'focused' : ''}`}
                                             placeholder="Routine Maintainance" value={chasis} onChange={handleInputChange(setChasis, 'chasis')} 
                                             onFocus={() => handleFocus('chasis')} onBlur={() => handleBlur('chasis')}/>
                                            {errors.chasis && <div className='error-message'>{errors.chasis}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label> Total Cost</label>
                                            <input type="text"  className={`form-control ${focusField === 'endDate' ? 'focused' : ''}`}
                                            value={endDate} placeholder="200 /-" onChange={handleInputChange(setEndDate, 'endDate')} onInput={handleAge}
                                            onFocus={() => handleFocus('endDate')} onBlur={() => handleBlur('endDate')}/>
                                            {errors.endDate && <div className='error-message'>{errors.endDate}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Vendor Name</label>
                                            <input type="text" className={`form-control ${focusField === 'endLocation' ? 'focused' : ''}`}
                                             placeholder="Kalki Karna" value={endLocation} onChange={handleInputChange(setEndLocation, 'endLocation')} onKeyDown={handleVehicleNameKeyDown} onInput={handleKeyDown}
                                             onFocus={() => handleFocus('endLocation')} onBlur={() => handleBlur('endLocation')}/>
                                            {errors.endLocation && <div className='error-message'>{errors.endLocation}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Parts Names</label>
                                            <input type="text"  className={`form-control ${focusField === 'startLocation' ? 'focused' : ''}`}
                                            value={startLocation} placeholder="Spark Plugs" onChange={handleInputChange(setStartLocation, 'startLocation')} 
                                            onFocus={() => handleFocus('startLocation')} onBlur={() => handleBlur('startLocation')}/>
                                            {errors.startLocation && <div className='error-message'>{errors.startLocation}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Quantity ?</label>
                                            <select className={`form-control ${focusField === 'totalAmount' ? 'focused' : ''}`}
                                            onFocus={() => handleFocus('totalAmount')} onBlur={() => handleBlur('totalAmount')}
                                             value={totalAmount} onChange={handleInputChange(setTotalAmount, 'totalAmount')}>
                                                <option value="">Select Quantity</option>
                                                <option value="Group1">2 </option>
                                                <option value="Group2">3 </option>
                                                <option value="Group3">4 </option>
                                                <option value="Group3">5 </option>
                                            </select>
                                            {errors.totalAmount && <div className='error-message'>{errors.totalAmount}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Maintainance Status</label>
                                            <select className={`form-control ${focusField === 'startDate' ? 'focused' : ''}`}
                                            onFocus={() => handleFocus('startDate')} onBlur={() => handleBlur('startDate')}
                                             value={startDate} onChange={handleInputChange(setStartDate, 'startDate')}>
                                                <option value="">Select Status</option>
                                                <option value="Group1">Good</option>
                                                <option value="Group2">V Good</option>
                                                <option value="Group3">Bad </option>
                                                <option value="Group4">Average </option>
                                            </select>
                                            {errors.startDate && <div className='error-message'>{errors.startDate}</div>}
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

export default Vehiclelist;

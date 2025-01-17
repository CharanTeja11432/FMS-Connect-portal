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


const today = new Date().toISOString().split('T')[0];

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
    const [apiUrl, setApiurl] = useState('');
    const [apiUser, setApiuser] = useState('');
    const [apiPassword, setApipassword] = useState('');
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
        { icon: <ConstructionIcon />, label: "Maintainance",item6:"Add Maintainance List" },
        { icon: <ManageAccountsIcon />, label: "Users & Roles",item7:"Add users",item8:"Add Roles" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});

        let newErrors = {};
        const registrationPattern = /^[a-zA-Z0-9]+$/; // Allow only alphanumeric characters

    if (!registration) newErrors.registration = '*Please enter the registration number';
    else if (!registrationPattern.test(registration)) newErrors.registration = '*Registration can only contain letters and numbers';
        if (!vehicle) newErrors.vehicle = '*Please enter the vehicle name';
        if (!driver) newErrors.driver = '*Please enter the model';
        if (!chasis) newErrors.chasis = '*Please enter the chasis number';
        if (!startLocation) newErrors.startLocation = '*Please enter the engine number';
        if (!endLocation) newErrors.endLocation = '*Please enter the manufacturer';
        if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please select vehicle type';
        if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) newErrors.totalAmount = '*Please Select Vehicle Group';
        if (!startDate) newErrors.startDate = '*Please enter vehicle color';
        if (!endDate) newErrors.endDate = '*Please select expiry date';
        if (!tripStatus) newErrors.tripStatus = '*Please select a vehicle group';
        if (!apiUrl) newErrors.apiUrl = '*Please enter API URL';
        if (!apiUser) newErrors.apiUser = '*Please enter API username';
        if (!apiPassword) newErrors.apiPassword = '*Please enter API password';
        
      
        if (Object.keys(newErrors).length === 0) {
            const finalData = { registration, vehicle, driver, chasis, startLocation, endLocation, totalKM, totalAmount, startDate, endDate, tripStatus, apiUrl, apiUser, apiPassword };
            navigate('/final', { state: finalData });
        } else {
            setErrors(newErrors);
        }
    };
    const handleInputChange = (setter, field) => (event) => {
        let value = event.target.value;
    
        // For registration, allow only alphanumeric characters
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
            !(charCode >= 48 && charCode <= 57) && // 0-9
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
    
        // Allow only alphabetic characters (A-Z, a-z)
        if (
            !(charCode >= 65 && charCode <= 90) && // A-Z
            !(charCode >= 97 && charCode <= 122)&&
            charCode !== 32)
             { // a-z
            event.preventDefault(); // Prevent input for other characters
        }
    };
    
    const handleChasiskey = (event) => {
        const charCode = event.which || event.keyCode;
    
        // Allow control keys (backspace, delete, tab, etc.)
        if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
            return; // Allow backspace, tab, enter, escape, and arrow keys
        }
    
        // Allow only uppercase letters (A-Z), numbers (0-9), and space (keyCode 32)
        if (
            !(charCode >= 48 && charCode <= 57) && // 0-9
            !(charCode >= 65 && charCode <= 90) && // A-Z
            charCode !== 32 // space
        ) {
            event.preventDefault(); // Prevent input for other characters
        }
    };
    const handleNumberkey = (event) => {
        const charCode = event.which || event.keyCode;
    
        // Allow control keys (backspace, delete, tab, etc.)
        if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
            return; // Allow backspace, tab, enter, escape, and arrow keys
        }
    
        // Allow only numbers (0-9)
        if ( !(charCode >= 65 && charCode <= 90)&& charCode !== 32 ) { // 0-9
            event.preventDefault(); // Prevent input for other characters
        }
    };

    const handleEngineno = (event) => {
        const charCode = event.which || event.keyCode;
    
        // Allow control keys (backspace, delete, tab, etc.)
        if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
            return; // Allow backspace, tab, enter, escape, and arrow keys
        }
    
        // Allow only numbers (0-9)
        if (
            !(charCode >= 48 && charCode <= 57) && // 0-9
            !(charCode >= 65 && charCode <= 90) && // A-Z
            !(charCode >= 97 && charCode <= 122)   // a-z
        ) { // 0-9
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
        // Perform validation based on which field is blurred
        if (field === 'registration') {
            if (!registration) newErrors.registration = '*Please enter the registration number';
            else if (!registrationPattern.test(registration)) newErrors.registration = '*Registration can only contain letters and numbers';
        }
        if (field === 'vehicle') {
            if (!vehicle) newErrors.vehicle = '*Please enter the vehicle name';
        }
        if (field === 'driver') {
            if (!driver) newErrors.driver = '*Please enter the Model name';
        }
        if (field === 'chasis') {
            if (!chasis) newErrors.chasis = '*Please enter the chasis number';
        }
        if (field === 'startLocation') {
            if (!startLocation) newErrors.startLocation = '*Please enter the Engine number';
        }
        if (field === 'endLocation') {
            if (!endLocation) newErrors.endLocation = '*Please enter Manufacturer By';
        }
        if (field === 'totalKM') {
            if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please Select Vehicle Group';
        }
        if (field === 'totalAmount') {
            if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) newErrors.totalAmount = '*Please Select Vehicle Group';
        }
        if (field === 'startDate') {
            if (!startDate) newErrors.startDate = '*Please enter Vehicle Color';
        }
        if (field === 'endDate') {
            if (!endDate) newErrors.endDate = '*Please Select Expire Date';
        }
        if (field === 'tripStatus') {
            if (!tripStatus) newErrors.tripStatus = '*Please select Vehicle type';
        }
        if (field === 'apiUrl') {
            if (!apiUrl) newErrors.apiUrl = '*Please enter API URL';
        }
        if (field === 'apiUser') {
            if (!apiUser) newErrors.apiUser = '*Please enter API username';
        }
        if (field === 'apiPassword') {
            if (!apiPassword) newErrors.apiPassword = '*Please enter API password';
        }
       
    
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...newErrors,
        }));
    };
    
    

  
    const handleApiurl = (setter, field) => (event) => {
        const { value } = event.target;
        
        // Regular expression to validate HTTP and HTTPS URLs
        const urlPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
        
        setter(value);
        
        // Validate the URL
        if (field === 'apiUrl' && value && !urlPattern.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                apiUrl: 'Please enter a valid HTTP or HTTPS URL.',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                apiUrl: null,
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
                            <h3>Vehicle</h3>
                            <div className="d-flex">
                                <span>Dashboard</span> &gt; <span>Vehicle</span> &gt; <span className="active">Vehicle List</span>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='formtype'>
                                <div className="bgwhite">
                                    <h4>Vehicle List</h4>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Registration Number</label>
                                            <input type="text" className={`form-control ${focusField === 'registration' ? 'focused' : ''}`}  
                                            placeholder="Enter Registration Number"  value={registration} onChange={handleInputChange(setRegistration, 'registration')}  onKeyDown={handleKeyDown} onFocus={() => handleFocus('registration')}
                                            onBlur={() => handleBlur('registration')} />
                                            {errors.registration && <div className='error-message'>{errors.registration}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Vehicle Name</label>
                                            <input type="text" className={`form-control ${focusField === 'vehicle' ? 'focused' : ''}`}
                                             placeholder="Enter Vehicle Name" value={vehicle}  onChange={handleInputChange(setVehicle, 'vehicle')} onKeyDown={handleVehicleNameKeyDown}
                                             onFocus={() => handleFocus('vehicle')} onBlur={() => handleBlur('vehicle')}/>
                                            {errors.vehicle && <div className='error-message'>{errors.vehicle}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Model</label>
                                            <input type="text" className={`form-control ${focusField === 'driver' ? 'focused' : ''}`}
                                             placeholder="Enter Model Name" value={driver} onChange={handleInputChange(setDriver, 'driver')} onKeyDown={handleVehicleNameKeyDown}
                                             onFocus={() => handleFocus('driver')} onBlur={() => handleBlur('driver')}/>
                                            {errors.driver && <div className='error-message'>{errors.driver}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Chasis No</label>
                                            <input type="text" className={`form-control ${focusField === 'chasis' ? 'focused' : ''}`}
                                             placeholder="Enter Chasis Number" value={chasis} onChange={handleInputChange(setChasis, 'chasis')} onKeyDown={handleChasiskey} 
                                             onFocus={() => handleFocus('chasis')} onBlur={() => handleBlur('chasis')}/>
                                            {errors.chasis && <div className='error-message'>{errors.chasis}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Engine No</label>
                                            <input type="text" className={`form-control ${focusField === 'startLocation' ? 'focused' : ''}`} 
                                            placeholder="Enter Engine Number" value={startLocation} onChange={handleInputChange(setStartLocation, 'startLocation')} onKeyDown={handleEngineno} 
                                            onFocus={() => handleFocus('startLocation')} onBlur={() => handleBlur('startLocation')}/>
                                            {errors.startLocation && <div className='error-message'>{errors.startLocation}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Manufacturer by</label>
                                            <input type="text" className={`form-control ${focusField === 'endLocation' ? 'focused' : ''}`}
                                             placeholder="Enter Manufacturer" value={endLocation} onChange={handleInputChange(setEndLocation, 'endLocation')} onKeyDown={handleVehicleNameKeyDown}
                                             onFocus={() => handleFocus('endLocation')} onBlur={() => handleBlur('endLocation')}/>
                                            {errors.endLocation && <div className='error-message'>{errors.endLocation}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Vehicle Type</label>
                                            <select className={`form-control ${focusField === 'tripStatus' ? 'focused' : ''}`}
                                            onFocus={() => handleFocus('tripStatus')} onBlur={() => handleBlur('tripStatus')}
                                             value={tripStatus} onChange={handleInputChange(setTripStatus, 'tripStatus')}>
                                                <option value="">Select Type</option>
                                                <option value="Group1">2 wheeler</option>
                                                <option value="Group2">3 wheeler</option>
                                                <option value="Group3">4 wheeler</option>
                                            </select>
                                            {errors.totalKM && <div className='error-message'>{errors.totalKM}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Vehicle Color</label>
                                            <input type="text" className={`form-control ${focusField === 'startDate' ? 'focused' : ''}`}
                                             placeholder="Vehicle Color" value={startDate} onChange={handleInputChange(setStartDate, 'startDate')} onKeyDown={handleNumberkey}
                                             onFocus={() => handleFocus('startDate')} onBlur={() => handleBlur('startDate')} />
                                            {errors.startDate && <div className='error-message'>{errors.startDate}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Expiry Date</label>
                                            <input type="date" min={today} className={`form-control ${focusField === 'endDate' ? 'focused' : ''}`}
                                            value={endDate} onChange={handleInputChange(setEndDate, 'endDate')} 
                                            onFocus={() => handleFocus('endDate')} onBlur={() => handleBlur('endDate')}/>
                                            {errors.endDate && <div className='error-message'>{errors.endDate}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                       
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Vehicle Group</label>
                                            <select className= "form-control"
                                             
                                            value={totalAmount} onChange={handleInputChange(setTotalAmount, 'totalAmount')}>
                                                <option value="">Select Group</option>
                                                <option value="Group1">Group 1</option>
                                                <option value="Group2">Group 2</option>
                                                <option value="Group3">Group 3</option>
                                            </select>
                                            {errors.totalAmount && <div className='error-message'>{errors.totalAmount}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="bgwhite mt-3 ml-4">
                                    <p>Vehicle Image</p>
                                    {/* <DragAndDrop 
                                        id="vehicleImageInput"
                                        onDrop={handleImageDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        label="Drag and drop your image here or click to upload"
                                        error={errors.vehicleimage}
                                        onFileChange={handleImageDrop}
                                    /> */}
                                    <input type="file" className="row ml-3 mt-4 mb-4" accept=".jpg , .jpeg"/>
                                </div>
                                <div className="bgwhite mt-3 ml-5">
                                    <p>Vehicle Document</p>
                                    {/* <DragAndDrop 
                                        id="vehicleDocInput"
                                        onDrop={handleDocDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        label="Drag and drop your document here or click to upload"
                                        error={errors.vehicledoc}
                                        onFileChange={handleDocDrop}
                                    /> */}
                                    <input type="file" className="row ml-3 mt-4"/>
                                </div>
                                </div>
                                <div className=" mt-3">
                                    <h4>API Details</h4>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>API URL</label>
                                            <input type="text"  className={`form-control ${focusField === 'apiUrl' ? 'focused' : ''}`}
                                            placeholder="Enter API URL" value={apiUrl} onChange={handleApiurl(setApiurl, 'apiUrl')}
                                            onFocus={() => handleFocus('apiUrl')} onBlur={() => handleBlur('apiUrl')} />
                                            {errors.apiUrl && <div className='error-message'>{errors.apiUrl}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>API Username</label>
                                            <input type="text" className={`form-control ${focusField === 'apiUser' ? 'focused' : ''}`}
                                             placeholder="Enter API Username" value={apiUser} onChange={handleInputChange(setApiuser, 'apiUser')} 
                                             onFocus={() => handleFocus('apiUser')} onBlur={() => handleBlur('apiUser')}/>
                                            {errors.apiUser && <div className='error-message'>{errors.apiUser}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>API Password</label>
                                            <input type="password" className={`form-control ${focusField === 'apiPassword' ? 'focused' : ''}`} 
                                            placeholder="Enter API Password" value={apiPassword} onChange={handleInputChange(setApipassword, 'apiPassword')} 
                                            onFocus={() => handleFocus('apiPassword')} onBlur={() => handleBlur('apiPassword')}/>
                                            {errors.apiPassword && <div className='error-message'>{errors.apiPassword}</div>}
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="d-flex ">
                                <Button type="button" className="clear"  onClick={() => {
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
                                    <Button type="submit" variant="contained" color="primary" style={{marginLeft:'40px'}}>Submit</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehiclelist;

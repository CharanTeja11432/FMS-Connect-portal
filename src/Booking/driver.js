import React, { useState , useRef} from "react";
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
import {Form} from 'react-bootstrap';
import Vector from '../Booking/Vector.png';
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
   
    const [focusField, setFocusField] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const[file,setFile]=useState(null);
    const [dragging,setDragging]=useState(false);
    const fileInputRef = useRef(null);
    const [errorMessage1, setErrorMessage1] = useState('');
    const[file1,setFile1]=useState(null);
    const [dragging1,setDragging1]=useState(false);
    const fileInputRef1 = useRef(null);
    
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
       

    if (!registration) newErrors.registration = '*Please enter Driver Name';
   
        if (!vehicle) newErrors.vehicle = '*Please enter Mobile No';
        if (!driver) newErrors.driver = '*Please enter Your Age';
        if (!chasis) newErrors.chasis = '*Please enter the License number';
        if (!startLocation) newErrors.startLocation = '*Please Select Joining date';
        if (!endLocation) newErrors.endLocation = '*Please enter Total experience';
        if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please select vehicle type';
        if (!totalAmount) newErrors.totalAmount = '*Please Enter Reference';
        if (!startDate) newErrors.startDate = '*Please enter Address';
        if (!endDate) newErrors.endDate = '*Please select expiry date';
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
    
        // Allow only numbers (0-9)
        if (!(charCode >= 48 && charCode <= 57)) {
            event.preventDefault(); // Prevent input for other characters
        }
    };
    const handleChasiskey = (event) => {
        const charCode = event.which || event.keyCode;
    
        // Allow control keys (backspace, delete, tab, etc.)
        if ([8, 9, 13, 27, 37, 38, 39, 40].includes(charCode)) {
            return; 
        }
    
        // Allow only alphabetic characters (A-Z, a-z)
        if (
            !(charCode >= 48 && charCode <= 57) && // 0-9 
            !(charCode >= 65 && charCode <= 90) && // A-Z
            charCode !== 32)
             { // a-z
            event.preventDefault(); 
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
            if (!registration) newErrors.registration = '*Please enter the Driver Name';
            else if (!registrationPattern.test(registration)) newErrors.registration = '*Registration can only contain letters and numbers';
        }
        if (field === 'vehicle') {
            if (!vehicle) newErrors.vehicle = '*Please enter the Mobile No';
        }
        if (field === 'driver') {
            if (!driver) newErrors.driver = '*Please enter the Age';
        }
        if (field === 'chasis') {
            if (!chasis) newErrors.chasis = '*Please enter the License No   ';
        }
        if (field === 'startLocation') {
            if (!startLocation) newErrors.startLocation = '*Please Select Joining Date';
        }
        if (field === 'endLocation') {
            if (!endLocation) newErrors.endLocation = '*Please enter Total Experience';
        }
        if (field === 'totalKM') {
            if (!totalKM || isNaN(totalKM) || totalKM <= 0) newErrors.totalKM = '*Please Select Vehicle Group';
        }
        if (field === 'totalAmount') {
            if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) newErrors.totalAmount = '*Please Enter Reference/Notes';
        }
        if (field === 'startDate') {
            if (!startDate) newErrors.startDate = '*Please enter Address';
        }
        if (field === 'endDate') {
            if (!endDate) newErrors.endDate = '*Please Select Driver';
        }
        if (field === 'tripStatus') {
            if (!tripStatus) newErrors.tripStatus = '*Please select Driver type';
        }
        
       
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...newErrors,
        }));
    };
    const handleChange = (event) => {
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

    const handleAge = (event) => {
        let newValue = event.target.value;
    
        
        const isValid = /^[0-9]*$/.test(newValue);
        if (!isValid) {
            newValue = newValue.replace(/[^0-9]/g, ''); 
        }
    
        // Limit to 10 digits
        if (newValue.length > 2) {
            newValue = newValue.slice(0, 2);
        }
    
        event.target.value = newValue;
    };
   
    const handleCases = (event) => {
        let newValue = event.target.value;
        const isValid = /^[A-Z0-9 ]*$/.test(newValue);
        if (!isValid) {
            newValue = newValue.replace(/[^A-Z0-9 ]/g, '');
        }
        if (newValue.length > 16) {
            newValue = newValue.slice(0, 16);
        }
    
        
        event.target.value = newValue;
    }

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const fileType = selectedFile.type;

            if (fileType === 'image/jpeg' || fileType === 'image/png') {
                setFile(selectedFile);
                setErrorMessage(''); 
            } else {
                setErrorMessage('Please upload a JPEG or PNG file.');
            }
        }
    };
    const handleDragover =(e)=>{
        e.preventDefault();
        setDragging(true);
    };
    const handleDragLeave =()=>{
        setDragging(false);
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            const fileType = droppedFile.type;

            if (fileType === 'image/jpeg' || fileType === 'image/png') {
                setFile(droppedFile);
                setErrorMessage(''); 
            } else {
                setErrorMessage('Please upload a JPEG or PNG file.');
            }
        }
    };
    const handleClick=()=> {
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    };

    const handleFileChange1 = (e) => {
        if (e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const fileType = selectedFile.type;

            if (fileType === 'application/pdf') {
                setFile1(selectedFile);
                setErrorMessage1(''); 
            } else {
                setErrorMessage1('Please upload a PDF file.');
            }
        }
    };
    const handleDragover1 =(e)=>{
        e.preventDefault();
        setDragging1(true);
    };
    const handleDragLeave1 =()=>{
        setDragging1(false);
    };

    const handleDrop1 = (e) => {
        e.preventDefault();
        setDragging1(false);
        if (e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            const fileType = droppedFile.type;

            if (fileType === 'application/pdf' ) {
                setFile1(droppedFile);
                setErrorMessage1(''); // Clear any previous error message
            } else {
                setErrorMessage1('Please upload a pdf file.');
            }
        }
    };

    const handleClick1=()=> {
        if(fileInputRef1.current){
            fileInputRef1.current.click();
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
                            <h3>Driver</h3>
                            <div className="d-flex">
                                <span>Dashboard</span> &gt; <span>Driver</span> &gt; <span className="active">Driver List</span>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='formtype'>
                                <div className="bgwhite">
                                    <h5>Add Driver List</h5>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Driver Name</label>
                                            <input type="text" className={`form-control ${focusField === 'registration' ? 'focused' : ''}`}  
                                            placeholder="Dr Livia salina"  value={registration} onChange={handleInputChange(setRegistration, 'registration')}  onKeyDown={handleKeyDown} onFocus={() => handleFocus('registration')}
                                            onBlur={() => handleBlur('registration')} />
                                            {errors.registration && <div className='error-message'>{errors.registration}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Mobile</label>
                                            <input type="text" className={`form-control ${focusField === 'vehicle' ? 'focused' : ''}`}
                                             placeholder="Enter Mobile No" value={vehicle}  onChange={handleInputChange(setVehicle, 'vehicle')} onKeyDown={handleVehicleNameKeyDown}   onInput={handleChange}
                                             onFocus={() => handleFocus('vehicle')} onBlur={() => handleBlur('vehicle')}/>
                                            {errors.vehicle && <div className='error-message'>{errors.vehicle}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Age</label>
                                            <input type="number" className={`form-control ${focusField === 'driver' ? 'focused' : ''}`}
                                             placeholder="Enter Age" value={driver} onChange={handleInputChange(setDriver, 'driver')} onKeyDown={handleVehicleNameKeyDown} onInput={handleAge}
                                             onFocus={() => handleFocus('driver')} onBlur={() => handleBlur('driver')}/>
                                            {errors.driver && <div className='error-message'>{errors.driver}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>License No</label>
                                            <input type="text" className={`form-control ${focusField === 'chasis' ? 'focused' : ''}`}
                                             placeholder="Enter License No" value={chasis} onChange={handleInputChange(setChasis, 'chasis')} onKeyDown={handleChasiskey} onInput={handleCases}
                                             onFocus={() => handleFocus('chasis')} onBlur={() => handleBlur('chasis')}/>
                                            {errors.chasis && <div className='error-message'>{errors.chasis}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label> License Expiry Date</label>
                                            <input type="date" min={today} className={`form-control ${focusField === 'endDate' ? 'focused' : ''}`}
                                            value={endDate} onChange={handleInputChange(setEndDate, 'endDate')} 
                                            onFocus={() => handleFocus('endDate')} onBlur={() => handleBlur('endDate')}/>
                                            {errors.endDate && <div className='error-message'>{errors.endDate}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Total Experience</label>
                                            <input type="number" className={`form-control ${focusField === 'endLocation' ? 'focused' : ''}`}
                                             placeholder="Enter Total Experience" value={endLocation} onChange={handleInputChange(setEndLocation, 'endLocation')} onKeyDown={handleVehicleNameKeyDown} onInput={handleAge}
                                             onFocus={() => handleFocus('endLocation')} onBlur={() => handleBlur('endLocation')}/>
                                            {errors.endLocation && <div className='error-message'>{errors.endLocation}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Date of Joining</label>
                                            <input type="date"  className={`form-control ${focusField === 'startLocation' ? 'focused' : ''}`}
                                            value={startLocation} onChange={handleInputChange(setStartLocation, 'startLocation')} 
                                            onFocus={() => handleFocus('startLocation')} onBlur={() => handleBlur('startLocation')}/>
                                            {errors.startLocation && <div className='error-message'>{errors.startLocation}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Reference/Notes</label>
                                            <input type="text" className={`form-control ${focusField === 'totalAmount' ? 'focused' : ''}`}
                                             placeholder="Reference" value={totalAmount} onChange={handleInputChange(setTotalAmount, 'totalAmount')} onKeyDown={handleNumberkey}
                                             onFocus={() => handleFocus('totalAmount')} onBlur={() => handleBlur('totalAmount')} />
                                            {errors.totalAmount && <div className='error-message'>{errors.totalAmount}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Address</label>
                                            <input type="text" className={`form-control ${focusField === 'startDate' ? 'focused' : ''}`}
                                             placeholder="Enter address" value={startDate} onChange={handleInputChange(setStartDate, 'startDate')} 
                                             onFocus={() => handleFocus('startDate')} onBlur={() => handleBlur('startDate')} />
                                            {errors.startDate && <div className='error-message'>{errors.startDate}</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                       
                                        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                            <label>Driver Status</label>
                                            <select className= "form-control"
                                             onFocus={() => handleFocus('tripStatus')} onBlur={() => handleBlur('tripStatus')}
                                            value={tripStatus} onChange={handleInputChange(setTotalAmount, 'tripStatus')}>
                                                <option value="">Select Status</option>
                                                <option value="Group1">Off-Duty</option>
                                                <option value="Group2">On-Duty</option>
                                                <option value="Group3">Driving</option>
                                            </select>
                                            {errors.tripStatus && <div className='error-message'>{errors.tripStatus}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                <div className="bgwhite ">

                                    <p>Driver Photo</p>
                                    <Form.Group className=" mb-3 w-190">

                                    <div     className={`upload-area p-4 text-center border ${dragging ? 'border-primary' : 'border-secondary'}`}
                                        onDragOver={handleDragover}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        onClick={handleClick}
                                        style={{ cursor: 'pointer' }}>
                                            <div className="upload ">
                                               <img src={Vector} alt="upload"/>
                                            </div>
                                            <Form.Label>
                                                {file ? file.name : "Uploade file or Browse"}
                                            </Form.Label>
                                            <Form.Control 
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    accept=".jpeg,.jpg, .png"
                                                    hidden
                                                    ref={fileInputRef}  
                                                />
                                            <p className="mt-2 text-muted">Supported formats : JPEG, PNG</p>
                                    </div>
                                    {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>} {/* Display error message here */}
                                    </Form.Group>

                                    {/* <input type="file" className="row ml-3 mt-4 mb-4" accept=".jpg , .jpeg"/> */}
                                </div>
                                </div>
                                {/* <div className="row"> */}
                                <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-column">
                                <div className="bgwhite ">
                                    
                                    <p>Driver Document</p>
                                <Form.Group className="mb-3 w-100">

                                    <div className={`upload-area p-4 text-center border ${dragging1 ? 'border-primary' : 'border-secondary'}`}
                                        onDragOver={handleDragover1}
                                        onDragLeave={handleDragLeave1}
                                        onDrop={handleDrop1}
                                        onClick={handleClick1}
                                        style={{ cursor: 'pointer' }}>
                                            <div className="upload ">
                                            <img src={Vector} alt="upload"/>
                                            </div>
                                            <Form.Label>
                                                {file1 ? file1.name : "Uploade file or Browse"}
                                            </Form.Label>
                                            <Form.Control 
                                                    type="file"
                                                    onChange={handleFileChange1}
                                                    accept=".pdf"
                                                    hidden
                                                    ref={fileInputRef1}  
                                                />
                                            <p className="mt-2 text-muted">Supported formats : PDF</p>
                                    </div>
                                    {errorMessage1 && <div className="text-danger mt-2">{errorMessage1}</div>} {/* Display error message here */}
                                    </Form.Group>

                                    {/* <input type="file" className="row ml-3 mt-4"/> */}
                                </div>
                                </div>
                                {/* </div> */}
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

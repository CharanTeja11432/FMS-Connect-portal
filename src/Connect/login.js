import React from 'react'
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import './login.css';
import Eye from '../Connect/eye-off.png';
import Group from '../Connect/Group.png';
import Tej from '../Connect/tej.jpg';
import { useNavigate } from 'react-router-dom'; 

const Connect=()=>{
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState(null);
    const [passwordMessage, setPasswordMessage] = useState(null);
    const navigate = useNavigate(); 

    const handleLogin = () => {
        setErrorMessage('');
        if (!role) {
            setErrorMessage('*Please select a role');
            return;
        }
        if (!email) {
            setEmailMessage('*Please enter your email address.');
            return;
        }
        if (!password) {
            setPasswordMessage('*Please enter your password.');
            return;
        }

        if (role === 'employee') {
            navigate('/employee'); 
        } else {
            navigate('/admin'); 
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className='login'>
            <div className='tej'>
                <img src={Tej} alt='background'/>
            <h3>Connect With Every Employee</h3>
            <p1>Everything you in an customaisable dashboard</p1>
            </div>
            <div className='hub'>
        <img src={Group} alt='logo' className='group'/>
            <h2> Connect Hub</h2>
            <p>Login to Your Account</p>
           
            <div className='radio'>
              <input type='radio' style={{cursor:'pointer'}}  checked={role === 'employee'} 
                        onChange={() => setRole('employee')}></input>
              <label>Employee</label>
              <input type='radio' style={{cursor:'pointer',marginLeft:'40px'}}     checked={role === 'admin'} 
                        onChange={() => setRole('admin')}></input>
                <label>Admin </label>
            </div>
            {errorMessage && <div className='error-message'>{errorMessage}</div>}
            <div className='email'>
                <label style={{marginLeft:'20px'}}>Email Address<br/>
                    <input type='text' value={email} placeholder='Enter Your email Address'onChange={(e) => {
                                setEmail(e.target.value);
                                if (e.target.value) {
                                    setEmailMessage(''); 
                                }
                            }}></input>
                </label><br/><br/>
                {emailMessage && <div className='email-message'>{emailMessage}</div>}
               
                
                <label className='label'>Password <br/>
                <input  type={showPassword ? 'text' : 'password'}  value={password} placeholder='*** *** *** ***' style={{marginLeft:'170px'}}
                onChange={(e) => {
                                setPassword(e.target.value);
                                if (e.target.value) {
                                    setPasswordMessage(''); 
                                }
                            }}></input>
                <img src={Eye} alt='eyelogo' className='eye' onClick={togglePasswordVisibility} />
                </label>
                 
                <p>Forget Password ?</p>
            </div>
                <Button color="primary" variant="contained" onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
};
export default Connect;
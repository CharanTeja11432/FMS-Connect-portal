import React from "react";
import './admin.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Groups3Icon from '@mui/icons-material/Groups3';
import CasinoIcon from '@mui/icons-material/Casino';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'; 

const Admin = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        navigate('/'); 
    };

    const handleEmployee = () => {
        navigate('/employee'); 
    };
    const menuItems = [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <PersonAddIcon />, label: "Recruitment" },
        { icon: <EditCalendarIcon />, label: "Schedule" },
        { icon: <Groups3Icon />, label: "Employee" },
        { icon: <CasinoIcon />, label: "Department" },
        { label: "Other", isText: true }, 
        { icon: <SupportAgentIcon />, label: "Support" },
        { icon: <SettingsSuggestIcon />, label: "Settings" },
        { icon: <PowerSettingsNewIcon />, label: "Logout" ,onClick:handleLogout},
    ];

    return (
        <div>
            <div className="admin-container">
                <div className="left-1">
                    <div className="header-1">
                        <h3>Connect Hub</h3>
                    </div>
                    <nav>
                        <p>Main Menu</p>
                        {menuItems.map((item, index) => (
                            <div key={index} onClick={item.onClick}>
                                <p>
                                    {item.icon} 
                                    {item.isText ? <span style={{ fontWeight: 'bold', color: '#555' }}>{item.label}</span> : item.label}
                                </p>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="right-container-1">
                <input type="text" placeholder="Search"/>
            <h4 onClick={handleEmployee}>Employee</h4>
            <h5 >HrPortal</h5>
        </div>
        <div className="dash-1">
            <h2>Dashboard</h2>
        </div>
        <div className="orange-1">
            <h5>Available positions</h5>
            <h4>24</h4>
            <p>4  Urgently Needed</p>
        </div>
        <div className="sky-1">
            <h5>Job Openings</h5>
            <h4>10</h4>
            <p>4 Active hiring</p>
        </div>
        <div className="pink-1">
            <h5>New Employee</h5>
            <h4>10</h4>
            <p>4 Departments</p>
        </div>
        <div className="white-admin">
            <h5>total Employee</h5>
            <h4>216</h4>
            <p>120 Men<br/>96 Women</p>
        </div>
        <div className="white-1-admin">
            <h5>Talent Request</h5>
            <h4>16</h4>
            <p>6 Men<br/>10 Women</p>
        </div>
        <div className="announce-admin">
            <h4>Announcements</h4>
            <div className="out-admin">
                <h6>Outing Scheduled for Every Departments</h6>
                <p>5 Minutes ago</p>
            </div>
            <div className="out-1-admin">
                <h6>Meeting For HR Departments</h6>
                <p>yesterday, 12:10 Pm</p>
            </div>
            <div className="out-2-admin">
                <h6>IT Departments Need UI/UX Desiner</h6>
                <p>yesterday, 09:15 Pm</p>
            </div>
            </div>

            <div className="announce-1-admin">
            <h4>Upcoming Schedule</h4>
            <p>Priority</p>
            <div className="out">
                <h6>Review Candidate Application</h6>
                <p>Today - 11:30 am</p>
            </div>
            <p1>Others</p1>
            <div className="out-1">
                <h6>Interview With Candidates</h6>
                <p>Today, 10:10 am</p>
            </div>
            <div className="out-2">
                <h6>Meeting With manager</h6>
                <p>Today, 04:15 Pm</p>
            </div>
                    <div className="box">
                        <h4>Recent Activity</h4>
                        <p1>10:40 am, Fri 10 sept 2024</p1>
                        <h5>You Post a New job</h5>
                        <p>Kindly Check the requirement and terms of work and make sure everything is right</p>
                        <p2>Today You can make 12 activities</p2>
                        <Button variant="contained" color="secondary">See all Activity</Button>
                    </div>
        </div>
        </div>
    );
};

export default Admin;

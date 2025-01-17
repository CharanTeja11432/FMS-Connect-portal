import React from "react";
import './employee.css';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import TaskIcon from '@mui/icons-material/Task';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'; 

const Employee = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        navigate('/'); 
    };

    const handleadmin = () => {
        navigate('/admin'); 
    };
    const menuItems = [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <AssignmentIcon />, label: "Attendance & Leave balance" },
        { icon: <PunchClockIcon />, label: "Time Sheet" },
        { icon: <ModelTrainingIcon />, label: "Training & Learning" },
        { icon: <TaskIcon />, label: "Tasks & Projects" },
        { icon: <CalendarMonthIcon />, label: "Calendar & Meetings" },
        { icon: <GroupsIcon />, label: "Support & Resources" },
        { icon: <AddLinkIcon />, label: "Quick Links" },
        { icon: <SettingsIcon />, label: "Settings" },
        { icon: <LogoutIcon />,  label: "Logout",  onClick: handleLogout }
    ];
  
   
    return (
        <div>
        <div className="employee-container">
            <div className="left">
                <div className="header">
                    <h3>Fleet360</h3>
                    <p>
                        Adabala Charan Teja <br /> empid: RJGS1396S 
                    </p>
                </div>
                <nav>
                    {menuItems.map((item, index) => (
                        <div key={index} onClick={item.onClick}>
                            <p>{item.icon} {item.label}</p>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
        {/* ///Rightcontainer// */}
        <div className="right-container">
            <h4 >Employee</h4>
            <h5 onClick={handleadmin}>HrPortal</h5>
        </div>
        <div className="dash">
            <h2>Dashboard</h2>
        </div>
        <div className="orange">
            <h5>Available positions</h5>
            <h4>24</h4>
            <p>4  Urgently Needed</p>
        </div>
        <div className="sky">
            <h5>Job Openings</h5>
            <h4>10</h4>
            <p>4 Active hiring</p>
        </div>
        <div className="pink">
            <h5>New Employee</h5>
            <h4>10</h4>
            <p>4 Departments</p>
        </div>
        <div className="green">
            <h5>New Employee</h5>
            <h4>10</h4>
            <p>4 Departments </p>
        </div>
        <div className="white">
            <h5>total Employee</h5>
            <h4>216</h4>
            <p>120 Men<br/>96 Women</p>
        </div>
        <div className="white-1">
            <h5>Talent Request</h5>
            <h4>16</h4>
            <p>6 Men<br/>10 Women</p>
        </div>
        <div className="white-2">
            <h5>Talent Request</h5>
            <h4>16</h4>
            <p>6 Men<br/>10 Women</p>
        </div>
        <div className="white-3">
            <h5>Talent Request</h5>
            <h4>16</h4>
            <p>6 Men<br/>10 Women</p>
        </div>
        <div className="announce">
            <h4>Announcement</h4>
             <div className="out-out">
                <h6>Outing Scheduled for Every Departments</h6>
                <p>5 Minutes ago</p>
            </div>
           <div className="out-out-1">
                <h6>Meeting For HR Departments</h6>
                <p>yesterday, 12:10 Pm</p>
            </div>
             <div className="out-out-2">
                <h6>IT Departments Need UI/UX Desiner</h6>
                <p>yesterday, 09:15 Pm</p>
            </div>

        </div>
        <div className="announce-1">
            <h4>Announcement</h4>
            <div className="out-out">
                <h6>Outing Scheduled for Every Departments</h6>
                <p>5 Minutes ago</p>
            </div>
            <div className="out-out-1">
                <h6>Meeting For HR Departments</h6>
                <p>yesterday, 12:10 Pm</p>
            </div>
            <div className="out-out-2">
                <h6>IT Departments Need UI/UX Desiner</h6>
                <p>yesterday, 09:15 Pm</p>
            </div>

        </div>
        </div>
    );
};

export default Employee;

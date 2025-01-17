import React  from "react";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import NoteIcon from '@mui/icons-material/Note';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SickIcon from '@mui/icons-material/Sick';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RJGlobal from "../EMS/rj.png";
import Vector from "../EMS/Vector.png";
const Connect =()=>
{
    return(
        <div class="container-fluid">
            <nav className="navbar navbar-light bg-white">
                <div className="container-fluid d-flex justify-content-start">
                <a className="navbar-brand me-5" href="https://rjglobalsolutions.com/our-clients-and-partners/">
                    <img src={RJGlobal} alt="Logo" style={{ width: '140px',cursor:'pointer' }} className="me-5" /> </a>
                    <img src={Vector} alt="Toggle" style={{ width: '20px',cursor:'pointer' }} />
                </div>
            </nav>
 
    <div class="row flex-nowrap">
        
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
               
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0 text-muted">
                        <LaptopWindowsIcon/> 
                            <i class="fs-4 bi-house "></i> <span class="ms-1 d-none d-sm-inline ml-3 ">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-muted">
                        <NotificationsActiveIcon/>
                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline ml-3">Announcement</span> </a>
                       
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-muted">
                        <CalendarTodayIcon/>
                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline ml-3">Events</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-muted">
                        <AccountTreeIcon/>
                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline ml-3">Projects</span></a>
            
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-muted">
                        <TaskAltIcon/>
                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline ml-3">Tasks</span></a>
                        
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-muted">
                        <DomainVerificationIcon/>
                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline ml-3">To Do</span> </a>
                            
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-muted">
                        <NoteIcon/>
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline ml-3">Notes</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-muted">
                        <ChatBubbleOutlineIcon/>
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline ml-3">Messages</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-muted">
                        <AccessTimeIcon/>
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline ml-3">Time Cards</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-muted">
                        <SickIcon/>
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline ml-3">Leaves</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-muted">
                        <ReportGmailerrorredIcon/>
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline ml-3">Reports</span> </a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-muted">
                        <SupportAgentIcon/>
                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline ml-3">Help & Support</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0 text-muted"> <span class="d-none d-sm-inline">Knowledge Base</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 text-muted"> <span class="d-none d-sm-inline">KB Articles</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 text-muted  "> <span class="d-none d-sm-inline">KB Categories</span> 2</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4 text-muted">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://i.pinimg.com/736x/64/aa/17/64aa17d64b3784e5317f040b673220c0.jpg" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1 text-muted">User</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-white text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div>

    )
}
export default Connect;
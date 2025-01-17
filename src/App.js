import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected imports
import Final from './Booking/final';
import Booking from "./Booking/booking";
import VehicleList from "./Booking/vehiclelist";
import Driverlist from "./Booking/driver";
import Fuel from "./Booking/fuel";
import Management from "./Booking/management";
import Users from "./Booking/users";
import Roles from "./Booking/roles";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/final" element={<Final />} />
          <Route path="/vehiclelist" element={<VehicleList />} />
          <Route path="/driver" element={<Driverlist/>} />
          <Route path="/fuel" element={<Fuel/>} />
          <Route path="/management" element={<Management/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/roles" element={<Roles/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import Navbar from './EMS/navbar';
// function App (){
//   return(
//     <div>
//       <Navbar/>
//     </div>
//   )
// }
// export default App;

// import Connect from "../src/Connect/myconnect";

// function App (){
//     return(
//       <div>
//         <Connect/>
//       </div>
//     )
//   }
//   export default App;
  
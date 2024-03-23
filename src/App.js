import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./NavBar/Home";
import MyNetwork from "./NavBar/Mynetwork";
import Jobs from "./NavBar/Jobs";
import Messaging from "./NavBar/Messages";
import Notifications from "./NavBar/Notifications";
import Me from "./NavBar/Me";
import Edit from "./UserServices/Edit";
import Addpost from "./UserServices/Addpost";
import Help from "./UserServices/Help";
import LoginPage from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import Register from "./registration/Registration";

var isLoggedIn = false;
let mainPage;
if (isLoggedIn)
  mainPage = (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/me" element={<Me />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
else {
  mainPage = <LoginPage />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

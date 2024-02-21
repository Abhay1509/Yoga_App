import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import HomeComponent from "./routes/Home";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/SignUp";
import Explore from "./routes/Explore";

function App() {
  const [cookie] = useCookies(["token"]);

  return (
    <div className="w-screen h-screen font-poppins">
      <Router>
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/login"
            element={
              cookie.token ? <Navigate to="/home" /> : <LoginComponent />
            }
          />
          <Route
            path="/signup"
            element={
              cookie.token ? <Navigate to="/home" /> : <SignupComponent />
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/textInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/app");
    } else {
      alert("Failure");
    }
  };

  const handleRedirectToHome = () => {
    navigate("/home"); // Change '/home' to the appropriate route for your home page
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center items-center align-items">
        <Icon icon="guidance:yoga" width={50} />
        YOGA APP
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-4">To continue, log in</div>
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex items-center justify-end my-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">Don't have an account?</div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/signup">SIGN UP</Link>
        </div>
        <div className="my-6">
          <button
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
            onClick={handleRedirectToHome}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

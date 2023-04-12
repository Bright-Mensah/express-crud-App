import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // check if fields are empty

    if (email == "") {
      toast.warn("Email can't be empty !");
    } else if (password == "") {
      toast.warn("Password can't be empty !");
    } else {
      // if all fields are not empty sign in the user
      const login = async function () {
        const request = await fetch("http://localhost:3400/login", {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        let result = await request.json();
        console.log(result);
        if (result.loginFailed) {
          toast.error("email or password is incorrect");
        } else {
          toast.success("login successful", {}).then(
            setTimeout(() => {
              navigate("/home");
            }, 6000)
          );
          // if login successful navigate to home
        }
      };
      login();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-4xl bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="w-full md:w-1/2 bg-white px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign In</h2>
            <form>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={handleLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  htmlForgot Password?
                </a>
              </div>
              <Link
                to={"/signup"}
                className="inline-block align-baseline font-bold text-sm text-slate-500 hover:text-blue-800 mt-10"
                href="#"
              >
                Don't have an account? Sign up
              </Link>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Welcome Back
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae tellus eu sapien aliquam malesuada ut eget elit.
            </p>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src="https://picsum.photos/id/1015/640/480"
              alt="Welcome Back"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

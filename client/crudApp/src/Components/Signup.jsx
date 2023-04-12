import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    // check if fields are not empty

    if (name == "") {
      toast.warn("Name can't be empty !");
    } else if (email == "") {
      toast.warn("Email can't be empty !");
    } else if (password == "") {
      toast.warn("Password can't be empty !");
    } else if (confirmPassword == "") {
      toast.warn("Confirm Password can't be empty !");
    } else {
      // check if confirm password matches password
      if (confirmPassword == password) {
        // if all fields are not empty and password matches, allow the user to sign up
        const signup = async function () {
          let request = await fetch("http://localhost:3400/signup", {
            method: "post",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });

          let result = await request.json();

          console.log(result);
          if (result.success) {
            toast.success("Sign up successful", {}).then(
              setTimeout(() => {
                navigate("/");
              }, 6000)
            );
          } else {
            toast.success("something went wrong, try again...!");
          }
        };
        signup();
      } else {
        toast.warn("Password doesn't match");
      }
    }
  };

  return (
    <div class="flex items-center justify-center h-screen">
      <div class="max-w-4xl bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="w-full md:w-1/2 bg-white px-6 py-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-8">Sign Up</h2>
            <form>
              <div class="mb-6">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  htmlFor="confirm_password"
                >
                  Confirm Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <Link
                  to={"/"}
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Already have an account? Sign in
                </Link>
              </div>
            </form>
          </div>
          <div class="w-full md:w-1/2 px-6 py-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-8">Welcome</h2>
            <p class="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae tellus eu sapien aliquam malesuada ut eget elit.
            </p>
            <img
              class="w-full h-64 object-cover rounded-lg shadow-lg"
              src="https://picsum.photos/id/1015/640/480"
              alt="Welcome"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;

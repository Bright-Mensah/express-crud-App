import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const [title, SetTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTask = (event) => {
    event.preventDefault();

    if (title == "") {
      toast.warn("title is empty");
    } else if (description == "") {
      toast.warn("description is empty");
    } else {
      // if all fields are not empty  add task
      const addTask = async function () {
        const request = await fetch("http://localhost:3400/task", {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
          }),
        });

        const data = await request.json();
        console.log(data);

        if (data.exist) {
          toast.error("Task already exist");
        } else if (data.success) {
          toast.success("task added successfully");
        }
      };
      addTask();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <h1 className="text-white text-lg font-medium">Admin Dashboard</h1>
        <ul className="flex items-center">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to={"/home"}
            className="text-sm leading-6 bg-slate-700 rounded-md  font-medium text-white p-3 mb-10"
          >
            Go back
          </Link>
          <h2 className="text-lg leading-6 font-medium mt-5 text-gray-900 mb-7">
            Add Task
          </h2>
          <div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-medium mb-6">Sign Up</h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="border border-gray-400 p-2 rounded w-72"
                      onChange={(e) => SetTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Description
                    </label>
                    <input
                      type="description"
                      id="description"
                      name="description"
                      className="border border-gray-400 p-2 rounded w-full"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleTask}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddTask;

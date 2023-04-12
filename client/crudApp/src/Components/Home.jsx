import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="flex flex-col h-screen">
      <nav class="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <h1 class="text-white text-lg font-medium">Admin Dashboard</h1>
        <ul class="flex items-center">
          <li class="mr-6">
            <a href="#" class="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li class="mr-6">
            <a href="#" class="text-gray-400 hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-400 hover:text-white">
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex-grow">
        <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h2 class="text-lg leading-6 font-medium text-gray-900">Dashboard</h2>
          <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Tasks
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>View and manage tasks.</p>
                </div>
                <div class="mt-5">
                  <Link
                    to={"/tasks"}
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all tasks
                  </Link>
                </div>
              </div>
            </div>
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Add Task
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>View and manage products.</p>
                </div>
                <div class="mt-5">
                  <Link
                    to={"/addTask"}
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Add Task
                  </Link>
                </div>
              </div>
            </div>
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Orders
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>View and manage orders.</p>
                </div>
                <div class="mt-5">
                  <a
                    href="#"
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all orders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasks = () => {
  const [data, setData] = useState([""]);
  const [starting, setStarting] = useState("");
  const [done, setDone] = useState("");

  useEffect(() => {
    // get all task
    getTask();
  }, []);

  async function getTask() {
    setDone("");
    setStarting("getting data");

    let request = await fetch("http://localhost:3400/task", {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    let result = await request.json();
    if (result) {
      setStarting("");
      setDone("done getting data");
    }
    setData(result);
    console.log(result);
  }

  const handleDeleteTask = async ($id) => {
    if (confirm("Are you sure you want to delete task?")) {
      let request = await fetch(`http://localhost:3400/task/${$id}`, {
        method: "delete",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      let result = await request.json();
      if (result.success) {
        toast.success("task has been deleted successfully");
      }
    } else {
      settitle("you pressed cancel");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {setDone ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {/* <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th> */}
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tools
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((task, index) => (
                      <tr key={index}>
                        {/* <td classNameName="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Jane Cooper
                    </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {task.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {task.description}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            to={`/task/${task._id}`}
                            href="#"
                            className="text-white bg-blue-600 rounded-sm px-4 py-2  hover:text-indigo-900 "
                          >
                            Edit
                          </Link>
                          <a
                            role="button"
                            onClick={() => handleDeleteTask(task._id)}
                            className=" bg-red-600 rounded-sm px-2 py-2 text-white m-5 hover:text-indigo-900"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Tasks;

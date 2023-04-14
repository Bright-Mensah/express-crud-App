import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const edit = () => {
  const [data, setData] = useState([""]);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  const id = useParams();

  const taskid = id.id;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let request = await fetch(`http://localhost:3400/task/${taskid}`, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    let result = await request.json();

    setData(result);

    console.log(result);
  }

  const handleUpdate = async function () {
    let request = await fetch(`http://localhost:3400/task/${taskid}`, {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    let response = await request.json();

    if (response.success) {
      toast.success("Task Updated!!!");
    } else {
      toast.error("Something went wrong....");
    }
  };

  return (
    <div>
      <h3 className="text-center text-slate-900 text-3xl mb-5">EDIT TASK</h3>
      <Link to={"/tasks"} className="bg-slate-900 text-white p-2 rounded-md">
        Go back
      </Link>
      <div class="h-screen flex items-center justify-center ">
        <div class="max-w-md mx-auto h-5/6 w-screen bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="px-6 py-4">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
                // if title is set then set the value for the new title or use the old title
                value={title ? title : data.title}
                className="border border-gray-400 p-2 w-full rounded-lg"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Enter post body"
                className="border border-gray-400 p-2 w-full rounded-lg"
                onChange={(e) => setDescription(e.target.value)}
                value={description ? description : data.description}
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button
                onClick={handleUpdate}
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default edit;

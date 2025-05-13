import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import check from "../assets/checkbox.png";

const Header = ({ setTasks, CompletedTasks }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    if (!name || !company || !date || !description) {
      alert("Please fill all the fields");
      return;
    }
    const task = { name, company, date, description };
    fetch("http://localhost:3000/addTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, data]);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/completedTasks")
      .then((res) => res.json())
      .then((data) => {
        setCompletedTasks(data);
        console.log(data);
      });
  }, [CompletedTasks]);

  return (
    <nav className="flex w-11/12 mx-auto items-center justify-between bg-base-200 px-6 py-3 rounded-3xl shadow-md mt-6">
      <div className="flex items-center justify-center gap-2 p-4">
        <img src={logo} alt="" />
        <h3 className="font-bold text-3xl text-primary">
          <span className="font-light">Dev</span>Board
        </h3>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 bg-base-300 rounded-full px-5 py-2 w-fit">
          <img src={check} alt="" />
          <h3 className="text-2xl font-bold">{completedTasks}</h3>
        </div>
        <button
          className="btn btn-primary rounded-3xl px-6 py-6"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add New Task
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-xl m-3">Add Task!</h3>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="input input-bordered w-full"
              name="title"
              placeholder="Task Title"
            />

            <input
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              type="text"
              className="input input-bordered w-full"
              name="company"
              placeholder="Task Company"
            />

            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              className="w-full input rounded-2xl"
              name="date"
            />

            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              name="description"
              placeholder="Task Description"
              className="w-full input rounded-2xl h-24"
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleAddTask} className="btn btn-primary">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </nav>
  );
};

export default Header;

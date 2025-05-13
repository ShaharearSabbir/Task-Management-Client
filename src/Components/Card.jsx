import React from "react";

const Card = ({ task, setCompletedTasks }) => {
  const { title, description, company, date, completed, id } = task;

  const handleCompleted = (id) => {
    fetch(`http://localhost:3000/updateTasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...task, completed: true }),
    })
      .then((res) => res.json())
      .then(() => {
        setCompletedTasks((prevTasks) => !prevTasks);
      });
  };

  return (
    <div className="bg-base-300 p-6 rounded-3xl flex flex-col gap-5 hover:shadow-lg">
      <div>
        <span className="px-4 py-2 bg-base-200 rounded-3xl">{company}</span>
      </div>
      <h3 className="text-2xl font-medium text-primary">{title}</h3>
      <div className="bg-base-200 rounded-2xl p-4 h-24 overflow-hidden">
        <p className="opacity-50">{description}</p>
      </div>
      <hr className="border-dashed border-1 border-base-200" />

      <div className="flex justify-between items-center">
        <div>
          <p className="opacity-50">Deadline</p>
          <h3 className="font-medium">{date}</h3>
        </div>
        <div>
          <button
            onClick={() => handleCompleted(id)}
            className="btn btn-primary rounded-3xl px-6 py-2"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

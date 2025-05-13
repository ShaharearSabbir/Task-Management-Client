import React, { useEffect } from "react";
import check from "../assets/checkbox.png";
import calender from "../assets/calender.png";
import { format } from "date-fns";
import Card from "./Card";

const MainBody = ({ tasks, setTasks, CompletedTasks, setCompletedTasks }) => {
  useEffect(() => {
    fetch("http://localhost:3000/pendingTasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [CompletedTasks]);

  return (
    <div className="bg-base-200 px-6 py-3 rounded-3xl shadow-md">
      {/* Top Bar */}
      <div className="flex lg:flex-row flex-col gap-5 items-center justify-between p-3">
        <div className="flex items-center bg-base-300 w-full md:w-fit rounded-3xl gap-3 p-6">
          <div className="rounded-full p-4 bg-base-200">
            <img src={check} alt="" />
          </div>
          <div>
            <h4 className="text-xl font-bold">Task Assigned</h4>
            <h4 className="text-xl font-bold">{tasks.length}</h4>
          </div>
        </div>
        <div className="flex items-center bg-base-300 w-full md:w-fit rounded-3xl gap-3 p-6">
          <div className="rounded-full p-4 bg-base-200">
            <img src={calender} alt="" />
          </div>
          <div>
            <h4 className="text-xl font-bold">{format(new Date(), "EEEE")}</h4>
            <h4 className="text-xl font-bold">
              {format(new Date(), "LLL MM, yyyy")}
            </h4>
          </div>
        </div>
      </div>
      <hr className="border-2 border-base-300 w-full border-dashed my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <Card
            task={task}
            setCompletedTasks={setCompletedTasks}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBody;

import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import SideBar from "./Components/SideBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [CompletedTasks, setCompletedTasks] = useState(false);
  return (
    <>
      <header>
        <Header setTasks={setTasks} CompletedTasks={CompletedTasks}/>
      </header>
      <main className="w-11/12 grid grid-cols-1 lg:grid-cols-12 mx-auto mt-6 gap-6">
        <div className="lg:col-span-8">
          <MainBody tasks={tasks} setTasks={setTasks} setCompletedTasks={setCompletedTasks} CompletedTasks={CompletedTasks}/>
        </div>
        <div className="lg:col-span-4">
          <SideBar />
        </div>
      </main>
    </>
  );
}

export default App;

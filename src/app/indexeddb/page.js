"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";

export default function Dashboard() {
  // 1. Fetch data from both tables
  const tasks = useLiveQuery(() => db.tasks.toArray());
  const users = useLiveQuery(() => db.users.toArray());

  // 2. Add functions for both
  const addTask = async () => {
    await db.tasks.add({
      title: "New Task " + (tasks?.length + 1 || 1),
      status: "pending"
    });
  };

  const addUser = async () => {
    await db.users.add({
      name: "User " + (users?.length + 1 || 1),
      email: `user${Date.now()}@example.com`
    });
  };

  return (
    <div className="p-8 ">
      {/* --- TASKS SECTION --- */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Tasks Table</h2>
        <button 
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>

        <ul className="mt-4">
          {tasks?.map(task => (
            <li key={task.id} className="border-b py-2 flex justify-between">
              <span>{task.title}</span>
              <span className="text-sm font-mono text-gray-500">{task.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- USERS SECTION --- */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Users Table</h2>
        <button 
          onClick={addUser}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add User
        </button>

        <ul className="mt-4">
          {users?.map(user => (
            <li key={user.id} className="border-b py-2 flex flex-col">
              <span className="font-semibold">{user.name}</span>
              <span className="text-xs text-gray-400">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



// npm install dexie dexie-react-hooks
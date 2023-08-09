import React, { useState } from "react";

interface IProps {
  addTask: (taskName: string) => void;
}

export function InputTask({ addTask }: IProps) {
  const [value, setValue] = useState<string>("");

  const handleAddTask = () => {
    if (!value || value.trim() === "") return alert("Please enter your task");
    addTask(value);
    setValue("");
  };

  return (
    <div className="flex justify-center py-4" style={{ marginBottom: 20 }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter your task"
        className="border border-gray-400 px-4 py-2 rounded-lg"
      />
      <button
        onClick={handleAddTask}
        className="ml-4 group h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white"
      >
        Add
      </button>
    </div>
  );
}

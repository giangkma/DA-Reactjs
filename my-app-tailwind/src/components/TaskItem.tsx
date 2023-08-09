import React from "react";
import { ITodoList } from "../types";

interface IProps {
  task: ITodoList;
  onDelete: () => void;
  onEdit: () => void;
}

export function TaskItem({ task, onDelete, onEdit }: IProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-white">
      <div className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
        <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
          {task.id}
        </p>
        <div className="grid grid-cols-6 p-5 gap-y-2">
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-gray-600 font-bold">{task.name}</p>
          </div>
          <div className="flex gap-3 md:col-start-auto md:ml-0 md:justify-end">
            <button
              onClick={onEdit}
              className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="rounded-lg text-sky-500 font-bold bg-red-100  py-1 px-3 text-sm w-fit h-fit"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

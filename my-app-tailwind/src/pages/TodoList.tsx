import React, { useEffect, useState } from "react";
import { InputTask } from "../components/InputTask";
import {
  addTaskAPI,
  deleteTaskAPI,
  editTaskAPI,
  getListTaskAPI,
} from "../apis";
import { ITodoList, TaskActionTypes } from "../types";
import { Loading } from "../components/Loading";
import { TaskItem } from "../components/TaskItem";
import { ConfirmModal } from "../components/ConfirmModal";
import { EditModal } from "../components/EditModal";

export function TodoList() {
  const [tasks, setTasks] = useState<ITodoList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [taskSelected, setTaskSelected] = useState<ITodoList | undefined>(
    undefined
  );
  const [actionType, setActionType] = useState<TaskActionTypes | undefined>();

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await getListTaskAPI();
      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskName: string) => {
    try {
      setLoading(true);
      await addTaskAPI(taskName);
      await getData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmedDeleteTask = async () => {
    try {
      if (!taskSelected) return;
      onCloseModal();
      setLoading(true);
      await deleteTaskAPI(taskSelected.id);
      await getData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmedEditTask = async (newValue: string) => {
    try {
      if (!taskSelected) return;
      if (!newValue) return;
      onCloseModal();
      setLoading(true);
      await editTaskAPI(taskSelected.id, {
        name: newValue,
      });
      await getData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onCloseModal = () => {
    setTaskSelected(undefined);
    setActionType(undefined);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      {taskSelected && (
        <>
          <ConfirmModal
            open={actionType === TaskActionTypes.DELETE}
            onClose={onCloseModal}
            onConfirm={confirmedDeleteTask}
            title="Delete Task"
            description="Are you sure you want to delete this task?"
          />
          <EditModal
            open={actionType === TaskActionTypes.EDIT}
            onClose={onCloseModal}
            onConfirm={confirmedEditTask}
            title="Edit Task"
            description="Are you sure you want to edit this task?"
            task={taskSelected}
          />
        </>
      )}
      {loading && <Loading />}
      <h1 className="2xl:(text-6xl ) xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center">
        Todo List
      </h1>
      <InputTask addTask={addTask} />
      {tasks.map((task, index) => {
        return (
          <TaskItem
            onDelete={() => {
              setTaskSelected(task);
              setActionType(TaskActionTypes.DELETE);
            }}
            onEdit={() => {
              setTaskSelected(task);
              setActionType(TaskActionTypes.EDIT);
            }}
            task={task}
            key={index}
          />
        );
      })}
    </div>
  );
}

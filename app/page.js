"use client";
import { AddToList, ToDoLists } from "@/components";
import store from "@/context/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <DataProvider>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4 gap-6 bg-black">
        <p className="text-3xl font-semibold text-zinc-100">ToDo List 🚀</p>
        <div className="w-full md:w-1/2 rounded-lg px-6 py-8 border border-zinc-800 text-white">
          {/* Add to list */}
          <AddToList />
          {/* Delete a list */}
          <ToDoLists />
        </div>
      </div>
    </DataProvider>
  );
};

const DataProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default page;

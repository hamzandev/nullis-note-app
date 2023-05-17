"use client";
import { useState, useRef } from "react";
import { Task } from "@prisma/client";

import { IoClose } from "react-icons/io5";
import { BsPlusCircle, BsPencil } from "react-icons/bs";

import { createTask as buatTask } from "@/utils/tasks.server";

export default function EditModal({ task }: { task: Task }) {
  const [modal, setModal] = useState(false);
  const taskData = useRef({
    name: task.title,
    description: task.description,
    updatedAt: task.updatedAt,
  });

  return (
    <>
      <button
        onClick={() => setModal((prev) => !prev)}
        className="w-8 h-8 flex items-center justify-center p-1 hover:border-slate-500 duration-200 rounded-full border border-slate-700"
      >
        <BsPencil />
      </button>
      <div
        className={`absolute w-screen -inset-x-[50vw] -inset-y-[25vh] ${
          modal ? "min-h-screen" : "max-h-0"
        } duration-200 overflow-hidden inset-0 bg-zinc-800/90 z-50 flex items-center justify-center`}
      >
        <form
          action={buatTask}
          className="grid gap-4 my-10 md:mx-auto mx-5 md:w-4/12 w-full border border-slate-600 relative bg-slate-900 hover:border-slate-500 group p-6 rounded-2xl"
        >
          <span
            onClick={() => setModal((prev) => !prev)}
            className="absolute cursor-pointer -right-2 -top-2 font-mono w-8 h-8 flex items-center justify-center rounded-full bg-rose-500 block"
          >
            <IoClose />
          </span>
          <h1 className="md:text-2xl text-xl font-bold">
            Buat Jadwal Tugas Baru
          </h1>
          <input name="id" type="hidden" />
          <input
            name="title"
            type="text"
            placeholder="Nama Tugas"
            autoFocus
            className="py-2 px-3 border border-slate-500 focus:border-slate-400 focus:outline rounded-lg focus:rounded-lg focus:outline-blue-500 bg-transparent focus:bg-slate-900 hover:border-slate-400 duration-200"
          />
          <textarea
            name="description"
            className="border border-slate-600 hover:border-slate-500 duration-200 py-2 px-3 bg-transparent focus:bg-slate-900 focus:outline-blue-500 rounded-lg"
            rows={10}
            cols={5}
            placeholder="Deskripsi Tugas"
          ></textarea>
          <button className="py-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-600">
            Simpan Tugas
          </button>
        </form>
      </div>
    </>
  );
}

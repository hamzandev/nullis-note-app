import TaskCard from "@/components/TaskCard";
import { getFinished } from "@/utils/tasks.server";
import { Task } from "@prisma/client";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";

export default async function TaskSelesai() {
  const { tasks } = await getFinished();

  if (tasks.length == 0)
    return (
      <div className="flex items-center justify-center min-h-[70vh] gap-3 flex-col">
        <h1 className="text-slate-500 text-lg italic text-center">
          --- Tidak ada Tugas yang telah Diselesaikan ---
        </h1>
        <p className="text-sm text-slate-500">
          Tugas yang diselesaikan akan tampil disini.
        </p>
        <Link
          href={"/"}
          className="px-6 py-2 flex gap-2 items-center text-slate-400 mt-3 rounded-xl border border-slate-700 hover:border-slate-500 duration-200 text-sm"
        >
          <BsEyeFill />
          Lihat Daftar Tugas
        </Link>
      </div>
    );

  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold mt-3">Tugas Diselesaikan</h1>
      <section className="grid 2xl:grid-cols-4 md:grid-cols-3 md:gap-6 gap-y-12 my-10">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </section>
    </section>
  );
}

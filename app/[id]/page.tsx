import Link from "next/link";
import { getOneTask } from "@/utils/tasks.server";
import { BsArrowLeftCircle, BsClockFill, BsPencil } from "react-icons/bs";
import TaskCardAction from "@/components/TaskCardAction";
import { Task } from "@prisma/client";

export default async function TaskDetail({
  params,
}: {
  params: { id: number };
}) {
  const { task }: { task: Task | any } = await getOneTask(params.id); //passing custom param

  return (
    <section className="container mx-auto my-10">
      <div className="border max-w-4xl mx-auto md:w-7/12 2xl:w-full border-slate-700 rounded-2xl p-8 hover:border-slate-500 duration-200 relative bg-gradient-to-br from-slate-950/30 to-slate-800/30 group backdrop-blur-md">
        <Link
          href="/"
          className="flex gap-2 text-slate-300 mb-5 items-center underline-offset-1 underline"
        >
          <BsArrowLeftCircle /> Kembali
        </Link>
        <h1 className="md:text-3xl text-xl font-bold bg-gradient-to-r from-cyan-500 bg-clip-text text-transparent to-pink-500 md:w-10/12 w-full">
          {task.title}
        </h1>
        <div className="flex md:flex-row my-3 flex-col items-center gap-5 2xl:text-base text-slate-400 text-sm">
          <span className="flex md:gap-2 gap-1 mb-5 items-center">
            <BsClockFill />
            Di Buat : {task.createdAt.toLocaleString()}
          </span>
          <span className="flex gap-2 mb-5 items-center">
            <BsPencil />
            Di Edit : {task.createdAt.toLocaleString()}
          </span>
        </div>

        <p className="md:text-lg text-base text-slate-200">
          {task.description}
        </p>
        <TaskCardAction isFinished={task?.isFinished} id={task.id} />

        <span className="italic w-max hover:border-slate-500 duration-200 cursor-default text-slate-500 mt-5 block border border-slate-700 rounded-full px-3">
          Status Tugas :{" "}
          {task?.isFinished ? "Diselesaikan" : "Belum Diselesaikan"}
        </span>
      </div>
    </section>
  );
}

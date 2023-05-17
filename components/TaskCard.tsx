import Link from "next/link";
import { TaskType } from "@/app/page";
import TaskCardAction from "@/components/TaskCardAction";
import { Task } from "@prisma/client";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="my_card border md:mt-5 mt-0 hover:border-slate-500 duration-200 hover:cursor-not-allowed group shadow-inner border-slate-700 bg-gradient-to-br from-slate-900 to-bg-blue-700/30 p-6 rounded-xl relative">
      <TaskCardAction isFinished={task.isFinished} id={task.id} />
      <Link href={"/" + task.id}>
        <h2 className="text-xl mb-3 font-bold bg-gradient-to-r from-cyan-500 bg-clip-text text-transparent to-pink-500 duration-200">
          {task.title}
        </h2>
      </Link>
      <span className="flex flex-col mt-5">
        <span className="text-slate-500 font-mono">
          Di Buat : {task.createdAt.toLocaleString()}
        </span>
        <span className="text-slate-500 font-mono">
          Di Edit : {task.updatedAt.toLocaleString()}
        </span>
      </span>
    </div>
  );
}

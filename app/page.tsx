import TaskCard from "@/components/TaskCard";
import AddModal from "@/app/AddModal";

import { getTasks } from "@/utils/tasks.server";

export type TaskType = {
  id: number;
  title: string;
  description: string;
  isFinished: boolean;
};

export default async function Home() {
  const { tasks } = await getTasks();

  if (tasks.length == 0)
    return (
      <div className="flex items-center justify-center min-h-[70vh] gap-3 flex-col">
        <h1 className="text-slate-500 text-lg italic text-center">
          --- Tidak ada Tugas untuk ditampilkan ---
        </h1>
        <AddModal />
      </div>
    );

  return (
    <div className="container mx-auto md:pt-0 pt-20">
      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-3 md:items-center justify-between">
        <h1 className="md:text-2xl text-lg font-bold">Daftar Semua Tugas</h1>
        <AddModal />
      </div>
      <section className="grid 2xl:grid-cols-4 md:grid-cols-3 md:gap-6 gap-y-12 my-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </section>
    </div>
  );
}

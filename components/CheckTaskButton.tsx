import { taskFinished } from "@/utils/tasks.server";
import { BsCheck2 } from "react-icons/bs";

export default function CheckTaskButton({ taskId }: { taskId: number }) {
  return (
    <>
      <form action={taskFinished}>
        <input type="hidden" name="id" value={taskId} />
        <button
          onClick={(e: any) => console.log(e.target)}
          className="flex items-center justify-center py-1 px-3 hover:border-slate-500 duration-200 rounded-full border border-slate-700"
        >
          <BsCheck2 />
          <span className="text-sm text-slate-500 ml-1"> Tandai Selesai</span>
        </button>
      </form>
    </>
  );
}

import { taskUnfinished } from "@/utils/tasks.server";
import { BsX } from "react-icons/bs";

export default function UncheckTaskButton({ taskId }: { taskId: number }) {
  return (
    <>
      <form action={taskUnfinished}>
        <input type="hidden" name="id" value={taskId} />
        <button
          onClick={(e: any) => console.log(e.target)}
          className="flex items-center justify-center py-1 px-3 hover:border-slate-500 duration-200 rounded-full border border-slate-700"
        >
          <BsX />
          <span className="text-sm text-slate-500 ml-1">
            Batal Tandai Selesai
          </span>
        </button>
      </form>
    </>
  );
}

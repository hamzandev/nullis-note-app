import { deleteTask } from "@/utils/tasks.server";
import { BsTrash2 } from "react-icons/bs";

export default function DeleteModal({ id }: { id: number }) {
  return (
    <>
      <form action={deleteTask}>
        <input name="id" type="hidden" value={id} />
        <button
          type="submit"
          // onClick={(e: any)=> setModal(prev => !prev)}
          className="w-8 h-8 flex items-center justify-center p-1 hover:border-slate-500 duration-200 rounded-full border border-slate-700"
        >
          <BsTrash2 />
        </button>
      </form>
    </>
  );
}

"use client";

import { BsCheck2, BsPencil, BsTrash2 } from "react-icons/bs";
import Link from "next/link";

import DeleteModal from "@/app/DeleteModal";
import CheckTaskButton from "./CheckTaskButton";
import UncheckTaskButton from "./UncheckTaskButton";

export default function TaskCardAction({
  id,
  isFinished,
}: {
  id: number;
  isFinished?: boolean;
}) {
  return (
    <section className="absolute rounded-xl group-hover:border-slate-500 duration-200 -top-6 -right-2 bg-slate-800 px-3 py-1 border border-slate-700 flex items-center gap-3">
      <Link
        href={`/edit/` + id}
        onClick={(e: any) => console.log(e.target)}
        className="w-8 h-8 flex items-center justify-center p-1 hover:border-slate-500 duration-200 rounded-full border border-slate-700"
      >
        <BsPencil />
      </Link>
      <DeleteModal id={id} />
      {!isFinished ? (
        <CheckTaskButton taskId={id} />
      ) : (
        <UncheckTaskButton taskId={id} />
      )}
    </section>
  );
}

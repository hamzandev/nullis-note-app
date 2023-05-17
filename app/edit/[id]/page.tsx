import { updateTask } from "@/utils/tasks.server";
import { IoClose } from "react-icons/io5";
import { BsArrowLeftCircle } from "react-icons/bs";
import Link from "next/link";

import { getOneTask } from "@/utils/tasks.server";

import EditInputs from "@/components/EditInputs";
import ButtonLoading from "@/components/ButtonLoading";

type ParamsType = {
	id: string | number;
};

export default async function EditTask({ params }: { params: ParamsType }) {
	const { task } = await getOneTask(params.id);

	return (
		<div className="container md:mx-auto flex items-center justify-center mt-10">
			<form
				action={updateTask}
				className="grid gap-4 my-10 md:mx-auto mx-5 md:w-5/12 w-full border border-slate-600 relative bg-slate-900 hover:border-slate-500 group p-6 rounded-2xl"
			>
				<div className="grid items-center grid-cols-3">
					<Link
						href="/"
						className="flex gap-2 text-slate-300 items-center underline-offset-1 underline"
					>
						<BsArrowLeftCircle /> Kembali
					</Link>
					<h1 className="text-lg font-bold text-center">
						Edit Tugas
					</h1>
				</div>
				<h2 className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent md:text-2xl text-xl text-lg font-semibold">
					{task.title}
				</h2>
				<input name="id" value={task.id} type="hidden" />
				<EditInputs title={task.title} description={task.description} />
				<ButtonLoading type="submit" />
			</form>
		</div>
	);
}

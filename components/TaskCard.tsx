import {TaskType} from "@/app/page"
import TaskCardAction from "@/components/TaskCardAction"
import {Task} from "@prisma/client"

export default function TaskCard({task}: {task: Task}) {
	return (
		<div className="my_card border hover:border-slate-500 duration-200 hover:cursor-pointer group shadow-inner border-slate-700 bg-gradient-to-br from-slate-900 to-bg-blue-700/30 p-6 rounded-xl relative">
			<TaskCardAction/>
			<h2 className="text-xl mb-3 font-bold text-slate-200">{task.title}</h2>
			<p>{task.description}</p>
		</div>
	)
}
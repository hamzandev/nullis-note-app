"use client"

import { BsCheck2, BsPencil, BsTrash2 } from "react-icons/bs"

export default function TaskCardAction() {
	return (
		<div className="absolute rounded-xl group-hover:border-slate-500 duration-200 -top-6 -right-2 bg-slate-800 px-3 py-1 border border-slate-700 flex items-center gap-3">
			<button 
				onClick={(e: any)=> console.log(e.target)}
				className="w-8 h-8 flex items-center justify-center p-1 hover:border-slate-500 duration-200 rounded-full border border-slate-700 block"
			>
				<BsPencil />
			</button>
			<button 
				onClick={(e: any)=> console.log(e.target)}
				className="w-8 h-8 flex items-center justify-center p-1 hover:border-slate-500 duration-200 rounded-full border border-slate-700 block"
			>
				<BsTrash2 />
			</button>
			<button
				onClick={(e: any)=> console.log(e.target)}
			 	className="flex items-center justify-center py-1 px-3 hover:border-slate-500 duration-200 rounded-full border border-slate-700 block"
			 >
				<BsCheck2 />
				<span className="text-sm text-slate-500 ml-1"> Tandai Selesai</span>
			</button>
		</div>
	)
}
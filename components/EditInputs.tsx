"use client"

import { useState } from "react"

export default function EditInputs({title, description} : {title: string, description: string}) {
	const [data, setData] = useState({
		title, description
	})
	console.log({data})
	return (
	   <>
	   		<input 
	   			name="title" 
	   			value={data.title}
	   			type="text" 
	   			onChange={(e: any) => setData(prev => ({...prev, [e.target.name]: e.target.value }))}
	   			placeholder="Nama Tugas" 
	   			autoFocus 
	   			className="py-2 px-3 border border-slate-500 focus:border-slate-400 focus:outline rounded-lg focus:rounded-lg focus:outline-blue-500 bg-transparent focus:bg-slate-900 hover:border-slate-400 duration-200" 
	   			/>
			<textarea 
	   			value={data.description}
	   			onChange={(e: any) => setData(prev => ({...prev, [e.target.name]: e.target.value }))}
				name="description" 
				className="border border-slate-600 hover:border-slate-500 duration-200 py-2 px-3 bg-transparent focus:bg-slate-900 focus:outline-blue-500 rounded-lg" 
				rows={10} 
				cols={5} 
				placeholder="Deskripsi Tugas"
			></textarea>
	   </>
	)
}
"use client";
import {useState} from "react"
import {createTask} from "@/utils/tasks.server"
import { IoClose } from "react-icons/io5"
import { BsPlusCircle } from "react-icons/bs"


export default function AddModal() {

	const [modal, setModal] = useState(false)

	return (
        <>
        	<button
        		onClick={() => setModal(prev => !prev)}
        		className="px-6 py-2  flex items-center gap-2 rounded-lg active:outline active:scale-95 outline-slate-500 duration-200 bg-gray-900 border border-slate-700 hover:border-slate-500">
				<BsPlusCircle /> 
				<span>Tambah Tugas</span>
			</button>
			<div className={`absolute ${modal ? 'min-h-screen' : 'max-h-0'} duration-200 overflow-hidden inset-0 bg-zinc-800/90 z-10 flex items-center justify-center`}>
				<form action={createTask} className="grid gap-4 my-10 md:mx-auto mx-5 md:w-4/12 w-full border border-slate-600 relative bg-slate-900 hover:border-slate-500 group p-6 rounded-2xl">
					<span onClick={()=> setModal(prev => !prev)} className="absolute cursor-pointer -right-2 -top-2 font-mono w-8 h-8 flex items-center justify-center rounded-full bg-rose-500 block">
						<IoClose />
					</span>
					<h1 className="md:text-2xl text-xl font-bold">Buat Jadwal Tugas Baru</h1>

					<input name="title" type="text" placeholder="Nama Tugas" autoFocus className="py-2 px-3 border border-slate-500 focus:border-slate-400 focus:outline rounded-lg focus:rounded-lg focus:outline-blue-500 bg-transparent focus:bg-slate-900 hover:border-slate-400 duration-200" />
					<textarea name="description" className="border border-slate-600 hover:border-slate-500 duration-200 py-2 px-3 bg-transparent focus:bg-slate-900 focus:outline-blue-500 rounded-lg" rows={10} cols={5} placeholder="Deskripsi Tugas"></textarea>
					<button className="py-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-600">Simpan Tugas</button>
				</form>			
			</div>
        </>

	)
}
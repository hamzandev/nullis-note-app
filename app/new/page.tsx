
export default function AddTask() {
	return (
		<div className="container mx-auto">
			<form className="grid gap-4 my-10 md:w-5/12 border border-slate-600 hover:border-slate-500 group p-6 rounded-2xl">
				<h1 className="md:text-2xl text-xl font-bold">Buat Jadwal Tugas Baru</h1>

				<input type="text" placeholder="Nama Tugas" autoFocus className="py-2 px-3 border border-slate-500 focus:border-slate-400 focus:outline rounded-lg focus:rounded-lg focus:outline-blue-500 bg-transparent focus:bg-slate-900 hover:border-slate-400 duration-200" />
			</form>
		</div>
	)
}
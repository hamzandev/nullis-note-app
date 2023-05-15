import "@/app/globals.css";
import Navbar from "@/components/Navbar"

export const metadata = {
	title: 'NULLis | Hamzan Wahyudi',
	description: 'Aplikasi pencatatan tugas berbasis website'
}

export default function RootLayout({children} : {children: React.ReactNode}) {
	return (
		
		<html>
			<body className="bg-slate-950 backdrop-blur-xl bg-body text-slate-300">
			<Navbar />
				<main className="md:pt-20 pt-8 md:px-0 px-5 relative">
					{children}
				</main>
			</body>
		</html>

	)
}
"use client";

import Link from "next/link"
import Image from "next/image"
import {useState} from "react"

import logo from "@/public/img/logo.svg"

export default function Navbar() {
	const [menu, setMenu] = useState(false)
	return (
		<nav className="py-3 fixed w-full z-10 bg-gradient-to-r from-slate-900/50 to-slate-700/50 border-b border-b-gray-800 backdrop-blur-xl z-10">
			<div className="container md:mx-auto md:px-0 px-3 flex items-center justify-between">
				{ /** <h1 className="text-xl font-bold uppercase">Noti.fy</h1> **/ }
				<Link href="/" className="flex items-center gap-3">
					<figure className="w-10 h-10">
						<Image src={logo} alt="logo-tulis.in" />
					</figure>
					<h1 className="font-mono font-bold text-xl md:border-r  md:border-slate-500 md:pr-3">NULLis
					</h1>
					<span className="h-full border-l border-slate-600 block"></span>
				</Link>

				<button onClick={() => setMenu(prev => !prev)} className="md:hidden block px-5 py-3 rounded-xl border border-gray-700">
					M
				</button>

				<section className="hidden nav_menus_desktop md:flex items-center gap-x-5 text-slate-400">
					<Link href="/" className="hover:text-slate-200 duration-200">Semua</Link>
					<Link href="/" className="hover:text-slate-200 duration-200">Selesai</Link>
					<Link href="/" className="hover:text-slate-200 duration-200">Tertunda</Link>
					<div className="auth_section flex items-center gap-5 border-l border-l-gray-500 pl-5">
						<Link href="/" className="hover:text-slate-200 duration-200 uppercase">Sign in</Link>
						<Link href="/" className="hover:text-slate-200 duration-200 uppercase">Sign Up</Link>
					</div>
				</section>

				<section className={`md:hidden nav_menus_mobile absolute inset-0 mt-20 duration-200 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl ${menu ? 'min-h-[30vh]' : 'min-h-0'} overflow-hidden grid items-center gap-x-5 text-slate-400 text-center`}>
					<Link href="/" className="hover:text-slate-200 py-3 hover:border hover:border-slate-400 rounded-xl duration-200">Semua</Link>
					<Link href="/" className="hover:text-slate-200 py-3 hover:border hover:border-slate-400 rounded-xl duration-200">Selesai</Link>
					<Link href="/" className="hover:text-slate-200 py-3 hover:border hover:border-slate-400 rounded-xl duration-200">Tertunda</Link>
					<div className="auth_section grid mb-5 grid-cols-2 px-4 items-center gap-5">
						<Link href="/" className="hover:text-slate-200 duration-200 uppercase border border-slate-600 hover:border-slate-500 rounded-xl py-2">Sign in</Link>
						<Link href="/" className="hover:text-slate-100 text-slate-200 duration-200 uppercase border-slate-700 rounded-xl py-2 bg-indigo-600">Sign Up</Link>
					</div>
				</section>
			</div>
		</nav>
	)
}
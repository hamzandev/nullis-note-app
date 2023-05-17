import Image from "next/image";
import logo from "@/public/img/logo.svg";

export default function Loading() {
	return (
		<section className="flex flex-col absolute inset-0 items-center justify-center bg-slate-800/50 backdrop-blur-md">
			<figure className="md:w-28 md:h-28 w-20 h-20 animate-pulse opacity-80">
				<Image src={logo} alt="NULLis Logo" className="object-cover" />
			</figure>
			<h1 className="text-center font-bold mt-2 md:text-xl text-lg">
				Loading...
			</h1>
		</section>
	);
}

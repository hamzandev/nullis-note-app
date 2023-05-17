"use client"

import {useState, SyntheticEvent} from "react"
import {BsArrowRepeat} from "react-icons/bs"

export default function ButtonLoading({type, label}: {type: string, label?: string | null}) {
	const [loading, setLoading] = useState(false)
	const handleClick = function(e: any) {
		setLoading(prev => !prev);
	}
	return (
        <div className="relative">
	        {
	        	loading && <div className="absolute inset-0 bg-slate-600/70 flex items-center justify-center rounded-lg">
	        		<BsArrowRepeat className="animate-spin" />
	        	</div>
	        }
			<button
				onClick={handleClick}
			 	className={`py-2 rounded-lg bg-gradient-to-tr w-full from-indigo-500 to-blue-600`}
			 >
			 	{label ? label : "Selesai"}
			 </button>
        </div>
	)
}
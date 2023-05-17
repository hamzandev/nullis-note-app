import Link from "next/link";
import { BsGithub, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Socials() {
	const socials = [
		{
			id: 1,
			name: "Twitter",
			icon: <BsTwitter size="22" />,
			url: "https://twitter.com/hamzandev",
		},
		{
			id: 2,
			name: "Instagram",
			icon: <BsInstagram size="22" />,
			url: "https://www.instagram.com/hamzandev",
		},
		{
			id: 3,
			name: "Facebook",
			icon: <BsFacebook size="22" />,
			url: "https://www.facebook.com/@hamzandev",
		},
		{
			id: 4,
			name: "Github",
			icon: <BsGithub size="22" />,
			url: "https://github.com/hamzandev",
		},
	];

	return (
		<div className="flex ml-3 items-center gap-6">
			{socials.map((social) => (
				<Link href={social.url}>{social.icon}</Link>
			))}
		</div>
	);
}

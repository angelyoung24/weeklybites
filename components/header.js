import Link from "next/link";

export default function Header() {
	return (
		<h2 className="flex flex-row justify-around">
			<Link href="/">
				<a className="hover:underline">Weekly Bites with Angel</a>
			</Link>
			<Link href="/about">
				<a className="hover:underline">About</a>
			</Link>
      <Link href="/contact">
      <a className="hover:underline">Contact</a>
      </Link>
		</h2>
	);
}

import Link from "next/link";

export default function Header() {
	return (
    <header classnName="bg-accent-1 border-t border-accent-2">
		<h2 className="flex justify-between text-5xl">
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
      <Link href="/contact">
      <a>Contact</a>
      </Link>
		</h2>
    </header>
	);
}

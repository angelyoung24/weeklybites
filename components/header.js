import Link from "next/link";
import styles from '../styles/header.module.css'

export default function Header() {
	return (
		<h2 className={styles.nav}>
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
	);
}

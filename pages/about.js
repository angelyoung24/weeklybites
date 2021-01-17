import Container from "../components/container";
import Header from "../components/header";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
	return (
		<Container>
			<Layout>
				<Head>
					<title>About | Weekly Bites with Angel</title>
				</Head>
                <Header />
				<Intro />

				<h2 className="text-6xl md:text-8m font-bold tracking-tighter flex justify-center leading-tight md:pr-8">
					About Angel
				</h2>
				<h3 className="text-6xl md:text-4m font-bold tracking-tighter flex justify-left leading-tight md:pr-8">
					{" "}
					Hello!{" "}
				</h3>
				<p>
					My name is <span className="font-bold">Angel Young</span>. I am
					writing this small form journal because I have a hard time tracking
					what I accomplished and feeling graditude.
				</p>
				<p>
					This blog is{" "}
					<a className="font-bold" href="https://fb.watch/33rYYJmp4M/">
						inspired
					</a>{" "}
					by Dan Mall's{" "}
					<a
						className="font-bold"
						href="https://twitter.com/danmall/status/1233860402481631233?s=20"
					>
						weekly notes
					</a>
				</p>
			</Layout>
		</Container>
	);
}

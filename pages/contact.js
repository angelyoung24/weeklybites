import Layout from "../components/layout";
import Header from "../components/header"
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";

export default function Contact() {
	return (
		<Layout>
			<Container>
            <Header />
				<Head>
					<title>Contact | Weekly Bites with Angel</title>
				</Head>
                <Intro />
				<h1>Contact</h1>
			</Container>
		</Layout>
	);
}

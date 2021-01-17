import Container from "./container";

export default function Footer() {
	return (
		<footer className="bg-accent-1 border-t border-accent-2">
			<Container>
				<div className="py-28 justify-center">
					<h6>
						Statically Generated with <a href="https://nextjs.org/">Next.js.</a>
					</h6>
				</div>
			</Container>
		</footer>
	);
}

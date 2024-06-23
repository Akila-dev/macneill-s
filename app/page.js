import Image from 'next/image';
import logo from '/public/imgs/macneill-logo.png';
import pattern from '/public/imgs/blue-pattern.png';

export default function Home() {
	return (
		<main className="h-full w-full bg-[--bg] flex">
			<div className="h-full w-full flex flex-col items-center justify-center"></div>
			<Image src={pattern} alt="pattern" className="h-[200px]" />
		</main>
	);
}

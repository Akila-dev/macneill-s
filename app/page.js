import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/imgs/macneill-logo.png';
import pattern from '/public/imgs/blue-pattern.png';
import linesBg from '/public/imgs/lines-bg.png';

export default function Home() {
	return (
		<main className="min-h-screen w-full bg-[--bg] flex flex-col relative">
			<div className="flex-1 container py-[35px] flex flex-col items-center justify-center relative z-[10]">
				<div className="h-full w-full text-center space-y-[35px] xl:space-y-[35px] max-w-[800px] mx-auto">
					<div className="">
						<div className="">
							<Image
								src={logo}
								alt="logo"
								className="object-contain h-[50px] md:h-[70px] w-full"
							/>
						</div>
						<p className="mt-[-5px] md:mt-[-10px] uppercase text-[--highlight] tracking-widest text-xs md:text-base">
							Scotch Whisky since 1937
						</p>
					</div>
					<div className="border border-[--highlight] p-5 py-6 md:p-7 space-y-6 md:space-y-7">
						<h3 className="uppercase text-[--highlight]">Age Verification</h3>
						<h3 className="uppercase text-[--white]">
							You must be over 21 to access this website
						</h3>
						<div className="flex flex-col md:flex-row items-center justify-center gap-3">
							<Link href="/home" className="btn-1">
								I am over 21
							</Link>
							<Link href="/underage" className="btn-2">
								I am under 21
							</Link>
						</div>
						<p className="text-[--white]">
							By entering this website, you certify that you are of legal
							drinking age in the state in which you reside.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full relative">
				<Image
					src={pattern}
					alt="pattern"
					className="h-[10vh] md:h-[15vh] max-h-[100px] w-full object-cover"
				/>
			</div>

			{/* LINES */}
			<div className="absolute bottom-[10vh] md:top-0 left-[50%] lg:left-[60%] h-full pb-[12vh]">
				<Image
					src={linesBg}
					alt="logo"
					className="object-cover md:object-contain object-left-bottom h-full w-auto"
				/>
			</div>
		</main>
	);
}

import WelcomePanel from '../components/common/WelcomePanel';
import Sparkers from '../public/images/sparkers.svg';
import { useEffect, useRef } from 'react';

export default function Home() {
	//hiding elements from layout we dont want
	useEffect(() => {
		document.querySelector('#coursesIcon').style.display = 'none';
		document.querySelector('#homeIcon').style.display = 'none';
	});

	return (
		<div className="flex">
			<WelcomePanel />
			<main className="flex w-full max-h-screen p-8 justify-end">
				<Sparkers className="w-1/2 min-w-[30rem]" />
			</main>
		</div>
	);
}

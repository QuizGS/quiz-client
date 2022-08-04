import ContactCard from '../components/common/ContactCard';

export default function About() {
	return (
		<main className="main-content ">
			<div className="card w-full h-full bg-base-200 shadow items-center">
				<div className="flex flex-col p-8 h-full items-center text-center justify-around max-w-4xl">
					<section className="flex flex-col gap-8 items-center">
						<h1 className="card-title text-4xl font-bold">About QuizSpark</h1>
						<p className=" text-xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt mauris at arcu eleifend volutpat. Proin placerat condimentum orci ac tincidunt. Phasellus imperdiet
							dolor auctor aliquet vestibulum. Aenean venenatis vitae lectus ornare feugiat. Fusce sed est eros. Aliquam posuere odio lacinia purus cursus dictum. Praesent pellentesque
							feugiat erat in varius. Fusce non nunc condimentum, viverra neque vitae, accumsan leo. Praesent felis eros, finibus a nunc nec, faucibus eleifend mi.
						</p>
					</section>

					<section className="flex flex-col gap-8 items-center">
						<h1 className=" card-title text-4xl font-bold">The Team</h1>
						{/* TODO: contact card needs props to pass to to show each person and this should be a forloop kinda thing*/}
						<div className="flex flex-row flex-wrap gap-8 justify-center">
							<ContactCard Name="Person Name" Bio="Frogs are very cool 🐸🐸🐸" />
							<ContactCard Name="Person Name" Bio="Frogs are very cool 🐸🐸🐸" />
							<ContactCard Name="Person Name" Bio="Frogs are very cool 🐸🐸🐸" />
							<ContactCard Name="Person Name" Bio="Frogs are very cool 🐸🐸🐸" />
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}

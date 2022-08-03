export default function Question(props) {
	//TODO: either inject question and answers with props or fetch them here
	const question = 'What is java?';
	const options = [
		'Java is a language in which many weird things happen and honeslty i am fed up of this thing',
		'Java is not a language and i love it dearly actually its the best language ever this is so good ❤️',
		'Java is a car',
		'Java is a not a car'
	];

	return (
		<section className=" card max-w-4xl bg-base-200 shadow shadow-base-300 scale-95 hover:bg-base-300 hover:scale-100 hover:shadow-md transition-all duration-300 ease-linear">
			<div className=" card-body text-base-content">
				<h1 className=" card-title text-4xl pb-8 font-bold text-primary ">{question}</h1>

				{/* list with all options for questions
                TODO: make each question unique and make it returen the choice */}
				<ul className="form-control gap-4">
					{options.map((o, i) => (
						<span key={i} className=" flex text-xl gap-4">
							<input key={i} id={i} type="radio" name="option" className="radio radio-primary checked:radio-secondary radio-sm mt-[0.375rem]" />
							<label key={i} htmlFor={i} className="font-semibold">
								{o}
							</label>
						</span>
					))}
				</ul>
			</div>
		</section>
	);
}

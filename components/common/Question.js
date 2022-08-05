export default function Question(props) {
  //TODO: either inject question and answers with props or fetch them here
  const question = "What is java?";
  const options = [
    "Java is a language in which many weird things happen and honeslty i am fed up of this thing",
    "Java is not a language and i love it dearly actually its the best language ever this is so good ❤️",
    "Java is a car",
    "Java is a not a car",
  ];

  return (
    <section className=" card max-w-4xl scale-95 bg-base-200 shadow shadow-base-300 transition-all duration-300 ease-linear hover:scale-100 hover:bg-base-300 hover:shadow-md">
      <div className=" card-body text-base-content">
        <h1 className=" card-title pb-8 text-4xl font-bold text-primary ">
          {question}
        </h1>

        {/* list with all options for questions
                TODO: make each question unique and make it returen the choice */}
        <ul className="form-control gap-4">
          {options.map((o, i) => (
            <span key={i} className=" flex gap-4 text-xl">
              <input
                key={i}
                id={i}
                type="radio"
                name="option"
                className="radio radio-primary radio-sm mt-[0.375rem] checked:radio-secondary"
              />
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

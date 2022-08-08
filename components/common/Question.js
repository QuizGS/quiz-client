import { useState } from "react";

const Question = (props) => {
  const [clicked, setClick] = useState(false);

  return (
    <section className=" card max-w-4xl scale-95 bg-base-200 shadow shadow-base-300 transition-all duration-300 ease-linear hover:scale-100 hover:bg-base-300 hover:shadow-md">
      <div className=" card-body text-base-content">
        <h1 className=" card-title pb-8 text-4xl font-bold text-primary ">
          {props.problem}
        </h1>

        {/* list with all options for questions
            TODO: make each question unique and make it returen the choice */}
        <ul className="form-control gap-4">
          {props.options.map((o, i) => (
            <span key={i} className=" flex gap-4 text-xl">
              <input
                key={i}
                id={i}
                type="radio"
                name="option"
                onClick={() => setClick(true)}
                className="radio radio-primary radio-sm mt-[0.375rem] checked:radio-secondary"
              />

              <label
                key={i}
                htmlFor={i}
                className={`font-semibol ${clicked ? "text-red-500" : ""}`}
              >
                {o}
              </label>
            </span>
          ))}
          <span className=" flex gap-4 text-xl">
            <input
              type="radio"
              name="option"
              className="radio radio-primary radio-sm mt-[0.375rem] checked:radio-secondary"
              onClick={() => setClick(true)}
            />

            <label
              className={`font-semibol ${clicked ? "text-green-500" : ""}`}
            >
              {props.answer}
            </label>
          </span>
        </ul>
      </div>
    </section>
  );
};

export default Question;

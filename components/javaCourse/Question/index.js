import OptionsList from "./OptionsList";

const Question = (props) => {
  return (
    <section className="card max-w-4xl scale-95 bg-base-200 shadow shadow-base-300 transition-all duration-300 ease-linear hover:scale-100 hover:bg-base-300 hover:shadow-md">
      <div className="card-body text-base-content">
        <h1 className="card-title pb-8 text-4xl font-bold text-primary ">
          {props.problem}
        </h1>

        <OptionsList
          options={props.options}
          answer={props.answer}
          onClick={props.handleClick}
        />
      </div>
    </section>
  );
};

export default Question;

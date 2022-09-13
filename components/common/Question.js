import { useState, useEffect } from "react";
import getRandomInt from "@/util/randomInt";

const Option = ({handleClick, clicked, style, text}) => {
  return (
    <span className="flex gap-4 text-xl">
      <input
        type="radio"
        name="option"
        onClick={handleClick}
        className="radio radio-primary radio-sm mt-[0.375rem] checked:radio-secondary"
      />
      <label className={`font-semibol${clicked ? " text-"+style : ""}`}>{text}</label>
    </span>
  );
};

const OptionsList = ({ options, answer }) => {
  const [clicked, setClick] = useState(false);
  const randomIndex = getRandomInt(options.length+1);
  const [allOptions, setOptions] = useState([]);

  const handleClick = () => setClick(true);

  useEffect(() => {
    const newOptions = options.map((option, ) => {
      return { text: option, style: "error" };
    });
    newOptions.splice(randomIndex, 0, { text: answer, style: "success" });
    setOptions(newOptions);
  }, []);

  return (
    <ul className="form-control gap-4">
      {allOptions.map((option, i) => (
        <Option
          key={i}
          text={option.text}
          style={option.style}
          handleClick={handleClick}
          clicked={clicked}
        />
      ))}
    </ul>
  );
};

const Question = (props) => {
  return (
    <section className=" card max-w-4xl scale-95 bg-base-200 shadow shadow-base-300 transition-all duration-300 ease-linear hover:scale-100 hover:bg-base-300 hover:shadow-md">
      <div className=" card-body text-base-content">
        <h1 className=" card-title pb-8 text-4xl font-bold text-primary ">
          {props.problem}
        </h1>
        
        <OptionsList options={props.options} answer={props.answer} />
      </div>
    </section>
  );
};

export default Question;

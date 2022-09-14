import { useState, useEffect } from "react";
import getRandomInt from "@/util/randomInt";

const OptionsList = ({ options, answer }) => {
    const [clicked, setClick] = useState(false);
    const [allOptions, setOptions] = useState([]);

    useEffect(() => {
        const randomIndex = getRandomInt(options.length+1);
        const newOptions = options.map((option) => {
        return { text: option, style: "text-error" };
        });
        newOptions.splice(randomIndex, 0, { text: answer, style: "text-success" });
        setOptions(newOptions);
    }, []);

    const handleClick = () => setClick(true);

    return (
        <form className="form-control gap-4">
        {allOptions.map(({text, style}, i) => (
            <span key={i} className="flex gap-4 text-xl">
                <input
                    type="radio"
                    name="option"
                    onClick={handleClick}
                    className="radio radio-primary radio-sm mt-[0.375rem] checked:radio-secondary"
                />
                <label className={`font-semibold ${clicked ? style : ""}`}>{text}</label>
            </span>
        ))}
        </form>
    );
};

export default OptionsList;

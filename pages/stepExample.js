import { useState, useEffect } from 'react';
import quizAPI from "../util/data/fetchQuizzes";

// TODO: delete this file
export default function stepExample(props) {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        setQuizzes(fetchQuizzes());
    }, []);

    // TODO: finish this example
    return (
        <div>
            <h1>Example</h1>
            <ul>
                {quizzes.map((quiz, i) => (
                    <li key={i}>{quiz.name}</li>
                ))}
            </ul>
        </div>
    );
}
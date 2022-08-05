import { useState, useEffect } from 'react';
import fetchQuizzes from "../util/data/fetchQuizzes";

// TODO: delete this file
export default function stepExample(props) {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        fetchQuizzes(0)
            .then(arr => {
                setQuizzes(arr);
            });
    }, []);

    // TODO: finish this example
    return (
        <div>
            <h1>Example</h1>
            <ul>
                {quizzes.map((quiz, i) => (
                    <li key={i}>
                        {quiz.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
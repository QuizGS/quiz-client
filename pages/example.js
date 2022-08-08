import { useState, useEffect } from 'react';
import quizAPI from "../util/quizAPI";

// TODO: delete this file
export default function Example(props) {
    // I use hooks here, but feel free to do it the old way with class components if you prefer
    const [quizzes, setQuizzes] = useState([]);

    // essentially ComponentDidMount
    useEffect(() => {
        async function fetchQuizzes() {
            const response = await quizAPI.get("quizzes") // only need to use what's after .../api/ in your url
                .then(res => { // what you want to do with the response
                    console.log(res);
                    setQuizzes(res.data);
                }).catch(err => { // what you want to do with an error
                    console.log(err);
                }).finally(() => { // what you want to do with the request regardless of success or failure
                    console.log("finally");
                });
            return response;
        }

        fetchQuizzes();
    }, []);

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
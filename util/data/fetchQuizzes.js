import quizAPI from "../quizAPI";

export default async function fetchQuizzes(week = 0) {
    const request = await quizAPI.get(
        week == 0 
            ? "quizzes"
            : `quizzes/${week}`
    );
    
    request
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    return [];
}
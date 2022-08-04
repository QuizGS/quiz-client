import quizAPI from "../quizAPI";

export default async function fetchQuizzes(week = 0) {
    const requestPath = "quizzes";
    if (week > 0) requestPath += `/${week}`;
    
    const quizzes = await quizAPI.get(requestPath)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
            return [];
        });
    return quizzes;
}
import quizAPI from "../quizAPI";

export default async function fetchQuestions(week = 0, quizId = 0) {
    let requestPath = "questions";
    if (week > 0) requestPath += `/${week}`;
    if (quizId > 0) requestPath += `/${quizId}`;
    
    const questions = await quizAPI.get(requestPath)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
            return [];
        });
    return questions;
}
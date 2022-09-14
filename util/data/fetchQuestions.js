import quizAPI from "./quizAPI";

export default async function fetchQuestions({
  week = 0,
  quizId = 0,
  id = 0,
} = {}) {
  let requestPath = "questions/";
  if (week > 0) requestPath += `week/${week}`;
  else if (quizId > 0) requestPath += `quiz/${quizId}`;
  else if (id > 0) requestPath += `id/${id}`;

  const questions = await quizAPI
    .get(requestPath)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  return questions;
}

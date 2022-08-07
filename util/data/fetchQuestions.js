import quizAPI from "../quizAPI";

export default async function fetchQuestions(week = 0, section = 0) {
  let requestPath = "questions";
  if (week > 0) requestPath += `/${week}`;
  if (section > 0) requestPath += `/${section}`;

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

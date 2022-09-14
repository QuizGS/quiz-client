import quizAPI from "./quizAPI";

export default async function fetchQuizzes({
  week = 0,
  id = 0,
  section = 0,
} = {}) {
  let requestPath = "quizzes/";
  if (week > 0) requestPath += `week/${week}`;
  else if (id > 0) requestPath += `id/${id}`;
  else if (section > 0) requestPath += `section/${section}`;

  const quizzes = await quizAPI
    .get(requestPath)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  return quizzes;
}

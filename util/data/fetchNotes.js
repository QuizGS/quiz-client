import quizAPI from "./quizAPI";

// TODO: add required authentication info
export default async function fetchNotes(
  { userId = 0, questionId = 0 } = { userId: 1 }
) {
  let requestPath = `notes/${userId}`;
  if (questionId > 0) requestPath += `/${questionId}`;

  const notes = await quizAPI
    .get(requestPath)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  return notes;
}

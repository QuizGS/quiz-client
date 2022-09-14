import Note from "@/components/javaCourse/Note";
import { NoteTextBox } from "@/components/javaCourse/Note";

// TODO: fetch notes from database based on currently authenticated user
// TODO: add ability/view to add notes from quiz view; each note should be associated with one quiz
export default function Notes() {
  return (
    <main className="main-content">
      <h1 className=" main-header">Notes</h1>
      <Note />
      <Note />
      <Note />
      <NoteTextBox />
    </main>
  );
}

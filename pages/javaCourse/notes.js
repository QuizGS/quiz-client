import Note from "@/components/javaCourse/Note";
import { NoteTextBox } from "@/components/javaCourse/Note";

// TODO: fetch notes from database based on currently authenticated user
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
};

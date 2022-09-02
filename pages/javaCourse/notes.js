import Note from "@/components/common/Note";
import NoteTextBox from "@/components/common/NoteTextBox";

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

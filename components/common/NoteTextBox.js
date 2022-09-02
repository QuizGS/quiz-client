export default function NoteTextBox() {
  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form>
        <div class="form-group mb-6">
          <input
            type="email"
            class="input w-full max-w-xs"
            id="note"
            placeholder="Type note here"
          />
        </div>

        <button
          type="submit"
          class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md"
        >
          Add
        </button>
      </form>
    </div>
  );
}

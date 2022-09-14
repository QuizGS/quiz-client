// TODO: implement actual functionality using the API
export default function NoteTextBox() {
  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
      <form>
        <div className="form-group mb-6">
          <input
            className="input w-full max-w-xs"
            id="note"
            placeholder="Type note here"
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      rounded
      bg-blue-600
      px-6
      py-2.5
      text-xs
      font-medium
      uppercase
      leading-tight
      text-white
      shadow-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

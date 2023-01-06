import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Note, removeNote } from "../../redux/notesSlice";
import "./notecard.css";
interface NotesState {
  notes: Note[];
}
const NoteCard: React.FC<NotesState> = ({ notes }) => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.notes.searchText);

  const handleRemoveNote = (id: number) => {
    dispatch(removeNote(id));
  };
  const noteCards = notes
    .filter((note) => note.text.includes(searchText))
    .map((note) => {
      return (
        <div
          key={note.id}
          className="card-content"
          style={{
            background: note.color,
          }}
        >
          <p>{note.text}</p>
          <button
            className="card-content-delete-button"
            onClick={() => handleRemoveNote(note.id)}
          >
            X
          </button>
        </div>
      );
    });
  return <div className="card-container">{noteCards}</div>;
};
export default NoteCard;

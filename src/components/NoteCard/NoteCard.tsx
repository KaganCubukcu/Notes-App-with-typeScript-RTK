import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Note, removeNote, updateNoteText } from "../../redux/notesSlice";
import { useState } from "react";
import "./notecard.css";
import Edit from "../../assets/edit.png";
import Remove from "../../assets/remove.png";

interface NotesState {
  notes: Note[];
}

const NoteCard: React.FC<NotesState> = ({ notes }) => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.notes.searchText);
  const [editingNoteId, setEditingNoteId] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  const handleRemoveNote = (id: number) => {
    dispatch(removeNote(id));
  };

  const handleUpdateNote = (id: number, text: string) => {
    setEditingNoteId(-1);
    setUpdatedText("");
    dispatch(updateNoteText({ id, text }));
  };

  const noteCards = notes
    .filter((note) => note.text.includes(searchText))
    .map((note) => {
      return (
        <div
          key={note.id}
          className="card-content"
          style={{ background: note.color }}
        >
          {editingNoteId === note.id ? (
            <div>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <button
                onClick={() => handleUpdateNote(note.id, updatedText)}
                className="save-button"
              >
                Save
              </button>
            </div>
          ) : (
            <p>{note.text}</p>
          )}
          <div className="card-button-container">
            <img
              src={Remove}
              alt=""
              onClick={() => handleRemoveNote(note.id)}
              className="remove-button"
            />
            <img
              src={Edit}
              alt=""
              className="edit-button"
              onClick={() => {
                setEditingNoteId(note.id);
                setUpdatedText(note.text);
              }}
            />
          </div>
        </div>
      );
    });
  return <div className="card-container">{noteCards}</div>;
};
export default NoteCard;

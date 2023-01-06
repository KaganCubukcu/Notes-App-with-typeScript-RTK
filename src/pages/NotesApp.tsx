import NoteCard from "../components/NoteCard/NoteCard";
import Notes from "../components/Notes/Notes";
import SearchBar from "../components/Search/SearchBar";
import { addNote } from "../redux/notesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import BackIcon from "../assets/go-back.png";
const NotesApp: React.FC = () => {
  const notesState = useSelector((state: RootState) => state.notes);

  const navitage = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 50px",
          alignItems: "center",
        }}
      >
        <img
          src={BackIcon}
          alt=""
          style={{
            position: "absolute",
            top: 35,
            left: 180,
            cursor: "pointer",
          }}
          onClick={() => navitage("/")}
        />
        <h1>NotesApp</h1>
        <Notes addNote={addNote} />
        <SearchBar />
        <NoteCard notes={notesState.notes} />
      </div>
    </div>
  );
};
export default NotesApp;

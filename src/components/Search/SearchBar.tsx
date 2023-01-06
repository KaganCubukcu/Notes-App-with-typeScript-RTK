import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchText } from "../../redux/notesSlice";
import { RootState } from "../../redux/store";

const SearchBar: React.FC = () => {
  const [searchNotes, setSearchNotes] = useState("");
  const dispatch = useDispatch();

  const handleUpdateSearchText = (text: string) => {
    dispatch(updateSearchText(text));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search notes"
        style={{
          width: 500,
          height: 50,
          marginTop: 20,
          borderRadius: 8,
        }}
        onChange={(e) => {
          setSearchNotes(e.target.value);
          handleUpdateSearchText(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotesState {
  notes: Note[];
  searchText: string;
}

export interface Note {
  id: number;
  text: string;
  color: string;
}

const initialState: NotesState = {
  notes: [],
  searchText: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    },
    removeNote(state, action: PayloadAction<number>) {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    },
    updateSearchText(state, action: PayloadAction<string>) {
      return {
        ...state,
        searchText: action.payload,
      };
    },
  },
});
export const { addNote, removeNote, updateSearchText } = notesSlice.actions;
export default notesSlice.reducer;

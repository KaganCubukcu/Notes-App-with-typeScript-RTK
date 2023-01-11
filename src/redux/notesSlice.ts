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
    updateNoteText(state, action: PayloadAction<{ id: number; text: string }>) {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, text: action.payload.text }
            : note
        ),
      };
    },
  },
});
export const { addNote, removeNote, updateSearchText, updateNoteText } =
  notesSlice.actions;
export default notesSlice.reducer;

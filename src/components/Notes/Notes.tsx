import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./notes.css";

type AddNoteAction = {
  type: string;
  payload: { id: number; text: string; color: string };
};

interface NotesProps {
  addNote: (payload: {
    id: number;
    text: string;
    color: string;
  }) => AddNoteAction;
}

const Notes: React.FC<NotesProps> = ({ addNote }) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#DEF5E5");
  const [warning, setWarning] = useState("");
  const [warningTimeoutId, setWarningTimeoutId] = useState<number | null>(null);

  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (text.length < 3) {
      if (warningTimeoutId !== null) {
        clearTimeout(warningTimeoutId);
      }
      const id = setTimeout(() => setWarning(""), 2000) as any;
      setWarningTimeoutId(id.id);

      setWarning("Please enter at least 3 characters for the note");
      return;
    }
    if (warningTimeoutId !== null) {
      clearTimeout(warningTimeoutId);
    }
    setWarning("");
    dispatch(
      addNote({
        id: Date.now(),
        text,
        color,
      })
    );
    setText("");
  };

  return (
    <div className="notes-container">
      {warning ? (
        <div className="warning">{warning}</div>
      ) : (
        <div style={{ display: "none" }}>{warning}</div>
      )}

      <textarea
        placeholder="Write notes here"
        style={{
          height: "30%",
          borderRadius: 8,
          padding: 10,
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
          marginTop: 10,
          paddingTop: 50,
        }}
      >
        <div className="bottom-container">
          <ul>
            <li
              style={{
                background: "#DEF5E5",
                boxShadow:
                  color === "#DEF5E5"
                    ? "inset 0px 0px 5px 0px rgba(0, 0, 0, 1)"
                    : "",
              }}
              onClick={() => setColor("#DEF5E5")}
            ></li>
            <li
              style={{
                background: "#FFFAD7",
                boxShadow:
                  color === "#FFFAD7"
                    ? "inset 0px 0px 5px 0px rgba(0, 0, 0, 1)"
                    : "",
              }}
              onClick={() => setColor("#FFFAD7")}
            ></li>
            <li
              style={{
                background: "#B2C8DF",
                boxShadow:
                  color === "#B2C8DF"
                    ? "inset 0px 0px 5px 0px rgba(0, 0, 0, 1)"
                    : "",
              }}
              onClick={() => setColor("#B2C8DF")}
            ></li>
            <li
              style={{
                background: "#C3F8FF",
                boxShadow:
                  color === "#C3F8FF"
                    ? "inset 0px 0px 5px 0px rgba(0, 0, 0, 1)"
                    : "",
              }}
              onClick={() => setColor("#C3F8FF")}
            ></li>
            <li
              style={{
                background: "#FFF38C",
                boxShadow:
                  color === "#FFF38C"
                    ? "inset 0px 0px 5px 0px rgba(0, 0, 0, 1)"
                    : "",
              }}
              onClick={() => setColor("#FFF38C")}
            ></li>
          </ul>
        </div>
        <div style={{ width: "50%" }}>
          <button onClick={handleAddNote} className="notes-button">
            Add note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;

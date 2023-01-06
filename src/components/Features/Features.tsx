import NoteIcon from "../../assets/note.png";
import ColorPaletteIcon from "../../assets/color-palette.png";
import MultitaskingIcon from "../../assets/multitasking.png";
import "./features.css";

const Features: React.FC = () => {
  return (
    <div className="features-container">
      <h1>Take control of your notes with a customizable Notes App</h1>
      <p>
        Easily record, color and filter your notes to keep track of your ideas
        and tasks.
      </p>
      <div className="section-container">
        <section>
          <img
            src={NoteIcon}
            alt=""
            style={{
              width: 64,
              height: 64,
              marginBottom: 20,
            }}
          />
          <h3>Quick note adding and searching</h3>
          <p>Quickly add and search for notes with an intuitive interface.</p>
        </section>
        <section>
          <img
            src={ColorPaletteIcon}
            alt=""
            style={{
              width: 64,
              height: 64,

              marginBottom: 20,
            }}
          />
          <h3>Add a personal touch with color selection</h3>
          <p>
            Personalize your notes by adding a personal touch and choosing from
            various colors.
          </p>
        </section>
        <section>
          <img
            src={MultitaskingIcon}
            alt=""
            style={{
              width: 64,
              height: 64,
              marginBottom: 20,
            }}
          />
          <h3>Reduce workload.</h3>
          <p>Stay organized and reduce your workload with Notes App.</p>
        </section>
      </div>
    </div>
  );
};
export default Features;

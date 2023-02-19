import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <h3>Color Generator</h3>
          <input
            className={error ? "error" : ""}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              {...color}
              hexColor={color.hex}
              key={index}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

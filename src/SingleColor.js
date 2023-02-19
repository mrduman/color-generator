import React, { useEffect, useState } from "react";

function SingleColor({ rgb, weight, hexColor, index }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexColorOnBoard = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColorOnBoard}</p>
      <button
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexColorOnBoard);
        }}
        type="button"
        className="copyBtn"
        style={{ padding: ".2rem .4rem", borderRadius: "5px" }}
      >
        {alert ? "Copied" : "Copy"}
      </button>
    </article>
  );
}

export default SingleColor;

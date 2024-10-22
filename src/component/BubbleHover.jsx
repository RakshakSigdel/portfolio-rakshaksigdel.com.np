import React from "react";

const Example = ({ text }) => {
  return (
    <div style={styles.container}>
      <BubbleText text={text} />
    </div>
  );
};

const BubbleText = ({ text }) => {
  return (
    <h2 style={styles.heading}>
      {text.split("").map((child, idx) => (
        <span
          key={idx}
          style={styles.hoverText}
          onMouseOver={(e) => handleHover(e, idx)}
        >
          {child}
        </span>
      ))}
    </h2>
  );
};

// Inline styles as JavaScript object
const styles = {
  container: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "200",
    color: "var(--primary)",
  },
  hoverText: {
    transition: "0.35s font-weight, 0.35s color",
    fontWeight: "200",
  },
};

// Handle hover effects dynamically
const handleHover = (e, idx) => {
  const element = e.target;
  element.style.fontWeight = "900";
  element.style.color = "var(--secondary)";
  if (element.nextSibling) {
    element.nextSibling.style.fontWeight = "500";
    element.nextSibling.style.color = "var(--secondary)";
  }
  if (element.nextSibling?.nextSibling) {
    element.nextSibling.nextSibling.style.fontWeight = "300";
  }
};

export default Example;

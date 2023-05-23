import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isShowing, setIsShowing] = useState(true);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "5px",
        lineHeight: "15px",
        /*border: "1px solid rgba(209, 213, 219, 0.5)",*/
        fontFamily: "Inter",
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p className="accord-text text-center italic">
          {title}{" "}
          <FontAwesomeIcon
            icon={isShowing ? faAngleUp : faAngleDown}
            className="text-amber-500 text-xl mt-2 ml-2"
          />
        </p>
      </button>
      {isShowing && <div style={{ padding: "5px" }}>{children}</div>}
    </div>
  );
}

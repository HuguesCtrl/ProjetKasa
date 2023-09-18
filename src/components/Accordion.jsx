import { useState, useRef } from "react";
import ArrowDown from "../assets/img/ArrowDown.png";

function Accordion({ label, content, isAbout }) {
  const [openAccordion, setOpenAccordion] = useState(false);

  const accordionArrow = useRef();
  const accordionText = useRef();
  function handleAccordionOpen() {
    setOpenAccordion(!openAccordion);
    if (!openAccordion) {
      accordionArrow.current.classList.add("open");
      accordionText.current.classList.add("active");
    } else {
      accordionArrow.current.classList.remove("open");
      accordionText.current.classList.remove("active");
    }
  }
  console.log(content);
  return (
    <div className="accordion">
      <div className={!isAbout ? "accordion-label" : "accordion-about-label"}>
        {label}{" "}
        <img
          src={ArrowDown}
          alt="Chevron"
          ref={accordionArrow}
          onClick={() => handleAccordionOpen()}
        />
      </div>
      <div className="accordion-text" ref={accordionText}>
        {typeof content !== "object" ? (
          <p>{content}</p>
        ) : (
          <ul className="list-text">
            {content?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Accordion;

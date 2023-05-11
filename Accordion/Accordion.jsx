// import React, { useState } from "react";

// function Accordion({ title, content }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <h3>{title}</h3>
//       </div>
//       {isOpen && <div className="accordion-body">{content}</div>}
//     </div>
//   );
// }

// export default Accordion;

import React, { useState } from 'react';

function Accordion(props) {
  // Initialize state to keep track of which accordion bodies are visible
  const [visibleAccordions, setVisibleAccordions] = useState({});

  // Define a function to toggle the visibility of an accordion body
  function toggleAccordion(id) {
    setVisibleAccordions(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  // Render each accordion title and body
  const accordions = props.data.map(item => (
    <div key={item.id}>
      <div
        className="accordion-title"
        onClick={() => toggleAccordion(item.id)}
      >
        {item.title}
      </div>
      {visibleAccordions[item.id] && (
        <div className="accordion-body">
          {item.content}
        </div>
      )}
    </div>
  ));

  return (
    <div className="accordion-container">
      {accordions}
    </div>
  );
}

export default Accordion;


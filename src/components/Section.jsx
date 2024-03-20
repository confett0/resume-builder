import { useState } from "react";

export default function Section({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const toggleSection = () => setIsActive(isActive ? false : true);

  return (
    <section className="panel">
      <h2 onClick={toggleSection}>{title}</h2>
      {isActive ? <p>{ children }</p> : null}
    </section>
  );
}

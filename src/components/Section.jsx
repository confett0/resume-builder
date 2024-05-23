import { useState } from "react";

export default function Section({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const toggleSection = () => setIsActive(isActive ? false : true);

  return (
    <section className="panel">
      <h3 onClick={toggleSection}>{title}</h3>
      {isActive ? <>{ children }</> : null}
    </section>
  );
}

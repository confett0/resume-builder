import { useState } from "react";

export default function Section({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const toggleSection = () => setIsActive((prevState) => !prevState);

  return (
    <section className="panel">
      <button className="toggle-panel" type="button" onClick={toggleSection}>
        {title}
        <img src={isActive ? "/up.png" : "/down.png"} />
      </button>
      {isActive ? <>{children}</> : null}
    </section>
  );
}

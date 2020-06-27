import React, { useState, useEffect } from "react";
import "../index.scss";
import "../styles/header.scss";
import { gsap, power3 } from "gsap/dist/gsap";

function Header() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    console.log("hello");

    var tl = new gsap.timeline({
      defaults: { duration: 0.8 },
    });

    tl.from(".list li", { opacity: 0, y: 20, stagger: 0.2 });
    tl.from("hr", { opacity: 0, scaleX: 0, duration: 1, ease: power3 }, "-=.5");
  });

  return (
    <div className="header-container">
      <div className="flex margin header">
        <h3>Marxists.org okay</h3>
        <div className="nav">
          <ul className="list">
            <li>Library</li>
            <li>History</li>
            <li>Subjects</li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Header;

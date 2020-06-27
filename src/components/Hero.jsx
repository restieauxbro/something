import React, { Component, useEffect, useRef } from "react";
import "../index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  let image = useRef(null);
  let hero = useRef(null);
  let title = useRef(null);

  useEffect(() => {
    var tl2 = new gsap.timeline({
      defaults: { duration: 1, opacity: 0 },
    });

    tl2.from(image, {});

    var parralax = new gsap.timeline();

    parralax.to(image, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        scrub: true,
      },
      y: "20vh",
    });

    parralax.to(title, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        scrub: true,
      },
      y: "7vh",
    });
  });

  return (
    <div ref={(el) => (hero = el)} className="hero">
      <section className="hero-text flex end margin">
        <h1 ref={(el) => (title = el)} className="glow">
          Vlademir <br /> Lenin
        </h1>
        <div className="description">
          <p>
            A controversial revolutionary figure. He served as head of
            government of Soviet Russia from 1917 to 1924 and of the Soviet
            Union from 1922 to 1924.
          </p>
        </div>
      </section>
      <div className="parallax-container">
        <img
          ref={(el) => (image = el)}
          className="hero-image"
          src="https://cdn.britannica.com/s:800x450,c:crop/59/215359-138-254B53C4/Top-questions-answers-Vladimir-Lenin.jpg"
          alt="Lenin"
        />
      </div>
    </div>
  );
}

export default Hero;

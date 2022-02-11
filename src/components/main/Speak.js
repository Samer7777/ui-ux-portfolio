import React from "react";
import SpeakImage from "../images/hero-img.jpg";

export default function Speak() {
  return (
    <section className="speak" id="speak">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="speak_text py-5">
              <h1>I'm Available To Work As Freelancer</h1>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus et officiis minus molestias recusandae quasi numquam,
                amet reiciendis minima non at ab quis aliquam quisquam quam
                asperiores maiores. Vitae, placeat.
              </p>
              <a href="#" className="hire_me">
                Hire Me
              </a>
            </div>
          </div>
          <div className="col-6 d-none d-md-block">
            <div className="speak_img">
              <img
                src={SpeakImage}
                width="200px"
                className="img-fluid mx-auto d-block"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

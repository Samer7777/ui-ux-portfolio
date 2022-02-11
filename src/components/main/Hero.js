import React from "react";
import Image1 from "../images/small-person.png";
import Image2 from "../images/hero-img.jpg";
import ReqtangleImage from "../images/rectangle.svg";
import CirculeleImage from "../images/circule.svg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="hero_text">
              <div className="animate__animated animate__fadeInLeft animate__delay-.5s">
                <h3>Hello, Im Janny</h3>
                <h1>
                  UI & UX <span>Designer</span>
                </h1>
                <p>Freelance Web Designer and Developer</p>
              </div>
              <button className="btn hire_me animate__animated animate__fadeInLeft animate__delay-1s">
                Hire Me
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="yellow_bg">
              <img src={ReqtangleImage} alt="image1" />
              <img src={CirculeleImage} alt="image2" />
            </div>
          </div>
          <div className="image">
            <img
              src={Image2}
              className="hero_image animate__animated animate__zoomIn animate__delay-1s"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

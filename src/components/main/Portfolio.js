import React from "react";
import ProjectImg1 from "../images/project1.png";
import ProjectImg2 from "../images/project2.png";
import ProjectImg3 from "../images/project3.png";
import ProjectImg4 from "../images/project4.png";
import ProjectImg5 from "../images/project5.png";

export default function Portfolio() {
  return (
    <section className="portfolio py-4" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading mb-5">
            <h2>My Latest Work</h2>
            <h6 className="small">
              Lorem <i class="fa-solid fa-palette"></i> ipsum
            </h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ex
              labore
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio_imges">
              <div className="img_content">
                <div className="img_div">
                  <img
                    src={ProjectImg2}
                    className="img-fluid"
                    alt="project img 1"
                  />
                  <div className="portfolio_inside_content">
                    <div className="image_icons">
                      <a href="#">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share"></i>
                      </a>
                    </div>
                    <div className="image_text">
                      <h3>Project1</h3>
                      <p className="small">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img_content">
                <div className="img_div">
                  <img
                    src={ProjectImg5}
                    className="img-fluid"
                    alt="project img 2"
                  />
                  <div className="portfolio_inside_content">
                    <div className="image_icons">
                      <a href="#">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share"></i>
                      </a>
                    </div>
                    <div className="image_text">
                      <h3>Project2</h3>
                      <p className="small">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img_content">
                <div className="img_div">
                  <img
                    src={ProjectImg3}
                    className="img-fluid"
                    alt="project img 3"
                  />
                  <div className="portfolio_inside_content">
                    <div className="image_icons">
                      <a href="#">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share"></i>
                      </a>
                    </div>
                    <div className="image_text">
                      <h3>Project3</h3>
                      <p className="small">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img_content">
                <div className="img_div">
                  <img
                    src={ProjectImg1}
                    className="img-fluid"
                    alt="project img 4"
                  />
                  <div className="portfolio_inside_content">
                    <div className="image_icons">
                      <a href="#">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share"></i>
                      </a>
                    </div>
                    <div className="image_text">
                      <h3>Project4</h3>
                      <p className="small">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img_content">
                <div className="img_div">
                  <img
                    src={ProjectImg4}
                    className="img-fluid"
                    alt="project img 5"
                  />
                  <div className="portfolio_inside_content">
                    <div className="image_icons">
                      <a href="#">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share"></i>
                      </a>
                    </div>
                    <div className="image_text">
                      <h3>Project5</h3>
                      <p className="small">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img_content">
                <div className="img_div">
                  <img
                    src={ProjectImg1}
                    className="img-fluid"
                    alt="project img 6"
                  />
                  <div className="portfolio_inside_content">
                    <div className="image_icons">
                      <a href="#">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share"></i>
                      </a>
                    </div>
                    <div className="image_text">
                      <h3>Project6</h3>
                      <p className="small">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

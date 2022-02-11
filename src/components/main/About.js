import React from "react";
import Image1 from "../images/about.png";
import ProjectImg1 from "../images/project1.png";
import ProjectImg2 from "../images/project2.png";
import ProjectImg3 from "../images/project3.png";
import ProjectImg4 from "../images/project4.png";
import ProjectImg5 from "../images/project5.png";
import ProjectImg6 from "../images/project6.png";

export default function About() {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading">
            <h2>About Me</h2>
            <h6 className="small">
              Lorem <i class="fa-solid fa-palette"></i> ipsum
            </h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ex
              labore
            </p>
          </div>
          <div className="col-md-5 mb-3">
            <img src={Image1} className="img-fluid about_image" alt="img" />
          </div>
          <div className="col-md-7 mb-3">
            <div className="row list_content">
              <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="list-home"
                    role="tabpanel"
                    aria-labelledby="list-home-list"
                  >
                    <div className="about_text">
                      <div className="about_text_content">
                        <h4 className="small text-muted">About Me</h4>
                        <h3>Janny Lorance</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id exercitationem voluptatum eaque magnam.
                          Adipisci libero tempora eum sunt harum fugiat
                          corrupti, deleniti natus repudiandae. Itaque fuga
                          harum placeat deleniti cumque! Debitis perferendis,
                          odit quos adipisci nam et voluptatibus nesciunt quae
                          culpa dolores veritatis nobis repellendus placeat
                          quibusdam, quod ex necessitatibus accusantium totam
                          tempore, tenetur cupiditate quaerat eaque architecto?
                          Et, assumenda!
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nobis doloremque debitis ad totam rerum?
                          Voluptatum fuga adipisci reprehenderit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="list-profile"
                    role="tabpanel"
                    aria-labelledby="list-profile-list"
                  >
                    <div className="about_text">
                      <div className="about_text_content">
                        <h4 className="small text-muted">Experince</h4>
                        <h3>This Is My Latest Works</h3>
                        <div className="image_gallery">
                          <img
                            src={ProjectImg1}
                            className="img-fluid"
                            alt="img1"
                          />
                          <img
                            src={ProjectImg2}
                            className="img-fluid"
                            alt="img2"
                          />
                          <img
                            src={ProjectImg3}
                            className="img-fluid"
                            alt="img3"
                          />
                          <img
                            src={ProjectImg4}
                            className="img-fluid"
                            alt="img4"
                          />
                          <img
                            src={ProjectImg5}
                            className="img-fluid"
                            alt="img5"
                          />
                          <img
                            src={ProjectImg6}
                            className="img-fluid"
                            alt="img6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="list-messages"
                    role="tabpanel"
                    aria-labelledby="list-messages-list"
                  >
                    <div className="about_text">
                      <div className="about_text_content">
                        <h4 className="small text-muted">Intrested</h4>
                        <h3>Im Intrested In These Things:</h3>
                        <ul className="mb-2">
                          <li>Frontend Career</li>
                          <li>Java Script</li>
                          <li>React.js</li>
                          <li>Node.js</li>
                        </ul>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Beatae amet ad eum repellendus ipsum ipsam
                          exercitationem laudantium accusantium deserunt
                          praesentium aliquid in doloremque, corrupti doloribus
                          eveniet odit totam saepe aut.
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div
                  className="list-group my_list"
                  id="list-tab"
                  role="tablist"
                >
                  <a
                    className="list-group-item list-group-item-action active"
                    id="list-home-list"
                    data-bs-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="list-home"
                  >
                    <i class="fa-solid fa-address-card"></i>
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-profile-list"
                    data-bs-toggle="list"
                    href="#list-profile"
                    role="tab"
                    aria-controls="list-profile"
                  >
                    <i class="fa-solid fa-house-laptop"></i>
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-messages-list"
                    data-bs-toggle="list"
                    href="#list-messages"
                    role="tab"
                    aria-controls="list-messages"
                  >
                    <i class="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

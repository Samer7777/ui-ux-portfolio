import React from "react";

export default function Testamonial() {
  return (
    <section className="testamonial" id="testemonial">
      <div className="container testimonial_container">
        <div className="row">
          <div className="col-12 text-center heading mb-3">
            <h2>What The Client Sayes</h2>
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
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              >
                01
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                02
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                03
              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testa_text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quos aperiam dicta nesciunt ullam neque tempore non
                    nemo laboriosam reprehenderit maiores ut nam rem est
                    distinctio fugit, voluptatem quibusdam rerum?
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testa_text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quos aperiam dicta nesciunt ullam neque tempore non
                    nemo laboriosam reprehenderit maiores ut nam rem est
                    distinctio fugit, voluptatem quibusdam rerum?
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testa_text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quos aperiam dicta nesciunt ullam neque tempore non
                    nemo laboriosam reprehenderit maiores ut nam rem est
                    distinctio fugit, voluptatem quibusdam rerum?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

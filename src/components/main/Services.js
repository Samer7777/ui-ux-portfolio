import React from "react";

export default function Services() {
  return (
    <section className="services py-3" id="services">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center heading">
            <h2>Services</h2>
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
          <div className="col-md-6 mb-3 p-2 right_side">
            <div className="services_card">
              <div className="services_text">
                <h3>UI/UX design</h3>
                <p className="small text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita perspiciatis et aliquid laudantium libero a, nisi
                  quia, porro alias tempore id sapiente saepe tempora quo, ipsum
                  similique maiores labore quos.
                </p>
              </div>
              <div className="services_img first">
                <i class="fa-solid fa-object-group"></i>
              </div>
            </div>
            <div className="services_card">
              <div className="services_text">
                <h3>web development</h3>
                <p className="small text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita perspiciatis et aliquid laudantium libero a, nisi
                  quia, porro alias tempore id sapiente saepe tempora quo, ipsum
                  similique maiores labore quos.
                </p>
              </div>
              <div className="services_img second">
                <i class="fa-solid fa-code"></i>
              </div>
            </div>
            <div className="services_card">
              <div className="services_text">
                <h3>seo marketing</h3>
                <p className="small text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita perspiciatis et aliquid laudantium libero a, nisi
                  quia, porro alias tempore id sapiente saepe tempora quo, ipsum
                  similique maiores labore quos.
                </p>
              </div>
              <div className="services_img third">
                <i class="fa-solid fa-bullhorn"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 p-2 left_side">
            <div className="services_card">
              <div className="services_text">
                <h3>web design</h3>
                <p className="small text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita perspiciatis et aliquid laudantium libero a, nisi
                  quia, porro alias tempore id sapiente saepe tempora quo, ipsum
                  similique maiores labore quos.
                </p>
              </div>
              <div className="services_img first">
                <i class="fa-solid fa-palette"></i>
              </div>
            </div>
            <div className="services_card">
              <div className="services_text">
                <h3>graphic design</h3>
                <p className="small text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita perspiciatis et aliquid laudantium libero a, nisi
                  quia, porro alias tempore id sapiente saepe tempora quo, ipsum
                  similique maiores labore quos.
                </p>
              </div>
              <div className="services_img second">
                <i class="fa-solid fa-compass-drafting"></i>
              </div>
            </div>
            <div className="services_card">
              <div className="services_text">
                <h3>photography</h3>
                <p className="small text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita perspiciatis et aliquid laudantium libero a, nisi
                  quia, porro alias tempore id sapiente saepe tempora quo, ipsum
                  similique maiores labore quos.
                </p>
              </div>
              <div className="services_img third">
                <i class="fa-solid fa-camera"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

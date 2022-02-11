import React from "react";
import BlogImg from "../images/blog1.jpg";
import BlogImg2 from "../images/blog2.jpg";
import BlogImg3 from "../images/blog3.jpg";
import BlogImg4 from "../images/blog4.jpg";

export default function Blog() {
  return (
    <section className="blog py-5" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading mb-5">
            <h2>Latest Blogs</h2>
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
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="blog_content text-center">
              <div className="blog_img">
                <img src={BlogImg} className="img-fluid" alt="blog1" />
                <div className="blog_title">
                  <h4 className="title">Lorem, ipsum. 1</h4>
                </div>
              </div>
              <div className="blog_content_text">
                <div className="blog_text_body">
                  <h3>blog 1</h3>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nisi nemo odio omnis eos nobis doloremque delectus
                    sint!
                  </p>
                </div>
                <div className="blog_text_footer">
                  <a href="#" className="read_more">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="blog_content text-center">
              <div className="blog_img">
                <img src={BlogImg2} className="img-fluid" alt="blog2" />
                <div className="blog_title">
                  <h4 className="title">Lorem, ipsum. 2</h4>
                </div>
              </div>
              <div className="blog_content_text">
                <div className="blog_text_body">
                  <h3>blog 2</h3>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nisi nemo odio omnis eos nobis doloremque delectus
                    sint!
                  </p>
                </div>
                <div className="blog_text_footer">
                  <a href="#" className="read_more">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="blog_content text-center">
              <div className="blog_img">
                <img src={BlogImg3} className="img-fluid" alt="blog3" />
                <div className="blog_title">
                  <h4 className="title">Lorem, ipsum. 3</h4>
                </div>
              </div>
              <div className="blog_content_text">
                <div className="blog_text_body">
                  <h3>blog 3</h3>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nisi nemo odio omnis eos nobis doloremque delectus
                    sint!
                  </p>
                </div>
                <div className="blog_text_footer">
                  <a href="#" className="read_more">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="blog_content text-center">
              <div className="blog_img">
                <img src={BlogImg4} className="img-fluid" alt="blog4" />
                <div className="blog_title">
                  <h4 className="title">Lorem, ipsum. 4</h4>
                </div>
              </div>
              <div className="blog_content_text">
                <div className="blog_text_body">
                  <h3>blog 4</h3>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nisi nemo odio omnis eos nobis doloremque delectus
                    sint!
                  </p>
                </div>
                <div className="blog_text_footer">
                  <a href="#" className="read_more">
                    Read More <i class="fa-solid fa-arrow-right"></i>
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

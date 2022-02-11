import React from "react";

export default function Footer() {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Get In Touch</h3>
            <p className="small text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="footer_icons">
              <a href="https://web.facebook.com/profile.php?id=100002713959339">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://github.com/Samer7777">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/samer-majid-554917138">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <p className="mb-0 copy_right">
              Created By <span>SAMER MAJID</span> | 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

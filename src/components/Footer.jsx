import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">User guides</a></li>
              <li><a href="#">Webinars</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="copyright">© 2022 Brand, Inc. <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Sitemap</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

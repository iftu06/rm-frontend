import React from "react";

const Copyright = ({ name, label, error, ...rest }) => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
              <div className="copyright_content">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i className="fa fa-heart" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                . Downloaded from
                <a href="https://themeslab.org/" target="_blank">
                  Themeslab
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </div>
              <div className="logos ml-sm-auto">
                <ul className="logos_list">
                  <li>
                    <a href="#">
                      <img src="images/logos_1.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/logos_2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/logos_3.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/logos_4.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

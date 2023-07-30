import React from "react"



export default function TopBar () {
    return (
        <div id="topbar" className="d-none d-lg-block">
            <div className="container clearfix">
                <div className="contact-info float-left">
                    <i className="fa fa-envelope-o"></i>{" "}
                    <a href="mailto:contact@example.com">contact@example.com</a>
                    <i className="fa fa-phone"> +1 5589 55488 55</i>
                </div>
                <div className="social-links float-right">
                    <a href="#" className="twitter">
                        <i className="fa fa-twitter">tw</i>
                    </a>
                    <a href="#" className="facebook">
                        <i className="fa fa-facebook">fb</i>
                    </a>
                    <a href="#" className="instagram">
                        <i className="fa fa-instagram">inst</i>
                    </a>
                    <a href="#" className="google-plus">
                        <i className="fa fa-google-plus">googl+</i>
                    </a>
                    <a href="#" className="linkedin">
                        <i className="fa fa-linkedin">linkedin</i>
                    </a>
                </div>
            </div>
            <style jsx>{`
// .body {
//     background: #fff;
//     color: #444;
//     font-family: "Open Sans", sans-serif;
//   }

/* Top Bar */
  #topbar {
    background: #fff;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #topbar .contact-info a {
    line-height: 1;
    color: #555;
  }

  #topbar .contact-info a:hover {
    color: #50d8af;
  }

  #topbar .contact-info i {
    color: #50d8af;
    padding: 4px;
  }

  #topbar .contact-info .fa-phone {
    padding-left: 20px;
    margin-left: 20px;
    border-left: 1px solid #e9e9e9;
  }

  #topbar .social-links a {
    color: #555;
    padding: 4px 12px;
    display: inline-block;
    line-height: 1px;
    border-left: 1px solid #e9e9e9;
  }

  #topbar .social-links a:hover {
    color: #50d8af;
  }

  #topbar .social-links a:first-child {
    border-left: 0;
  }

`}</style>
        </div>

)

}

  
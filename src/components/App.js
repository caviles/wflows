import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (

<article>
  <nav className="navbar navbar-default">
      <div className="container-fluid">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <IndexLink to="/">wFlow</IndexLink>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
      <li className="active"><a href="/">Home</a></li>
      <li> <Link to="/fuel-savings">Demo App</Link></li>
    <li><Link to="/about">About</Link> </li>
      <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
      <ul className="dropdown-menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" className="divider"></li>
      <li className="dropdown-header">Nav header</li>
    <li><a href="#">Separated link</a></li>
    <li><a href="#">One more separated link</a></li>
    </ul>
    </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
      <li><a href="../navbar-static-top/">Static top</a></li>
    <li><a href="../navbar-fixed-top/">Fixed top</a></li>
    </ul>
    </div>

    </div>



  </nav>
  {this.props.children}

  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 margin30">
          <div className="footer-col">
            <h3 className="heading">About us</h3>
            <p>
              Duis nisl est, porta eu augue et, tempor congue mauris. Praesent a ligula in urna consectetur rhoncus.
            </p>
            <ul className="address-info list-unstyled">
              <li><i className="fa fa-home"></i> Vaishali nagar, Jaipur, 302012</li>
              <li><i className="fa fa-phone"></i> +91 123456789</li>
              <li><i className="fa fa-envelope"></i> <a href="#">support@designmylife.com</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 margin30">
          <div className="footer-col">
            <h3 className="heading">Recent Post</h3>
            <ul className="list-unstyled popular-post">
              <li>
                <div className="popular-img">
                  <a href="#"> <img src="./assets/work-6.png" className="img-responsive" alt="" /></a>
                </div>
                <div className="popular-desc">
                  <h5> <a href="#">blog post image</a></h5>
                  <h6>31st july 2014</h6>
                </div>
              </li>
              <li>
                <div className="popular-img">
                  <a href="#"> <img src="./assets/work-2.png" className="img-responsive" alt="" /></a>
                </div>
                <div className="popular-desc">
                  <h5> <a href="#">blog post image</a></h5>
                  <h6>31st july 2014</h6>
                </div>
              </li>
              <li>
                <div className="popular-img">
                  <a href="#"> <img src="./assets/work-5.png" className="img-responsive" alt="" /></a>
                </div>
                <div className="popular-desc">
                  <h5> <a href="#">blog post image</a></h5>
                  <h6>31st july 2014</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 margin30">
          <div className="footer-col">
            <h3 className="heading">Elsewhere</h3>
            <ul className="list-inline social-1">
              <li><a href="#"><i className="fa fa-facebook" data-toggle="tooltip" title="" data-original-title="Facebook" data-placement="top"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" data-toggle="tooltip" title="" data-original-title="Twitter" data-placement="top"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus" data-toggle="tooltip" title="" data-original-title="Google pluse" data-placement="top"></i></a></li>
              <li><a href="#"><i className="fa fa-pinterest" data-toggle="tooltip" title="" data-original-title="Pinterest" data-placement="top"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble" data-toggle="tooltip" title="" data-original-title="Dribbble" data-placement="top"></i></a></li>
            </ul>
          </div>
          <div className="divide30"></div>
          <div className="footer-col">
            <h3 className="heading">Newsletter</h3>
            <p>
              Duis nisl est, porta eu augue et, tempor congue mauris.
            </p>
            <form className="newsletter-form" role="form">
              <div className="input-group">
                <label className="sr-only" for="subscribe-email">Email address</label>
                <input type="email" className="form-control" id="subscribe-email" placeholder="Enter your email"></input>
                <span className="input-group-btn">
                                        <button type="submit" className="btn btn-theme-bg btn-lg">OK</button>
                                    </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3 margin30">
          <div className="footer-col">
            <h3 className="heading">Recent Work</h3>
            <div className=" footer-work">
              <a href="#">
                <img src="./assets/work-1.png" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-2.png" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-10.jpg" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-4.jpg" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-5.png" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-6.png" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-7.png" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-8.png" className="img-responsive" alt="" />
              </a>
              <a href="#">
                <img src="./assets/work-9.png" className="img-responsive" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer-btm">
            <span>© Copyright 2014. Theme by Design_mylife</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</article>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

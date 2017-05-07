import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (

    <article>
    <div classNameName="one-page-static-wrap parallax" data-stellar-background-ratio="0.5">
      <div classNameName="container">
        <div classNameName="static-text slogan">
          <h1 classNameName="">We help automate Workflows.</h1>
        </div>
      </div>
    </div>
    <section id="about" className="padding-80">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <div className="center-header">
    <h3 className="center-heading">About Us</h3>
  <span className="center-line"></span>
    <p>Shortly About us</p>
  </div>
  </div>
  </div>
  <div className="row">
    <div className="col-md-7">
    <p className="wow animated fadeInLeft animated" style={{visibility: "visible", animationName: "fadeInLeft"}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  </p>
  </div>
  <div className="col-md-5">
    <div className="skills-wrapper wow animated fadeInRight animated animated animated" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInRight"}}>
    <h3 className="heading-progress">Web Design <span className="pull-right">88%</span></h3>
    <div className="progress">
    <div className="progress-bar" style={{width: "88%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="88" role="progressbar">
    </div>
    </div>
    <h3 className="heading-progress">Web Development <span className="pull-right">78%</span></h3>
    <div className="progress">
    <div className="progress-bar" style={{width: "78%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" role="progressbar">
    </div>
    </div>
    <h3 className="heading-progress">Marketing <span className="pull-right">82%</span></h3>
    <div className="progress">
    <div className="progress-bar" style={{width: "82%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" role="progressbar">
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  <div className="divide30"></div>
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <h3 className="heading">Some Facts</h3>
  </div>
  </div>
  <div className="divide40"></div>
    <div className="row">
    <div className="col-md-3 margin20 facts-in">
    <h3><i className="fa fa-image"></i><span className="counter">6858</span></h3>
    <h4>Projects Complete</h4>
  </div>
  <div className="col-md-3 margin20 facts-in">
    <h3><i className="fa fa-users"></i><span className="counter">685</span></h3>
    <h4>Happy Customers</h4>
  </div>
  <div className="col-md-3 margin20 facts-in">
    <h3><i className="fa fa-clock-o"></i><span className="counter">6000</span></h3>
    <h4>Hours Work </h4>
  </div>
  <div className="col-md-3 margin20 facts-in">
    <h3><i className="fa fa-coffee"></i><span className="counter">2500</span></h3>
    <h4>Cups of tea</h4>
  </div>
  </div>
  </div>
  </section>
    </article>
  );
};

export default HomePage;

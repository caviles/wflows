import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (


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
    <br/>
    {this.props.children}
  </nav>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

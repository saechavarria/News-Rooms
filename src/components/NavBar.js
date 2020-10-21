import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Page from "../containers/Page";

const Navbar = ({ getHomeNews, searchNews, onGetNews }) => {
  let input;
  return (
    <div>
      <Router>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
          <h3 className="navbar-brand">NEWS ROOM</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                  onClick={() => getHomeNews()}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/politic"
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onGetNews(1)}
                >
                  POLITICA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/international"
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onGetNews(2)}
                >
                  ITERNACIONAL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tecnology"
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onGetNews(3)}
                >
                  TECNOLOGIA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/entertaiment"
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onGetNews(4)}
                >
                  ESPECTACULOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/sports"
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onGetNews(5)}
                >
                  DEPORTES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/design"
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onGetNews(6)}
                >
                  DISEÑO
                </NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={(node) => (input = node)}
              ></input>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                onClick={() => searchNews(input.value)}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <Page category={0} />
            </Route>
            <Route path="/politic">
              <Page category={1} />
            </Route>
            <Route path="/international">
              <Page category={2} />
            </Route>
            <Route path="/tecnology">
              <Page category={3} />
            </Route>
            <Route path="/entertaiment">
              <Page category={4} />
            </Route>
            <Route path="/sports">
              <Page category={5} />
            </Route>
            <Route path="/design">
              <Page category={6} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;

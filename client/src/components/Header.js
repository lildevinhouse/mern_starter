import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {

  const auth = useSelector(({auth}) => auth);

  function Content(){
    switch (auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            MERN Starter
          </Link>
          <ul className="right">
            {Content()}
          </ul>
        </div>
      </nav>
  )
}



function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/dashboard">
      <h1>
        My Application
      </h1>
    </Link>
  </div>
)

export default connect(null, null)(Navigation);

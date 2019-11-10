import React from "react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className='jumbotron'>
      <h1> About Course Administration </h1>{" "}
      <Link to='/' className='btn btn-primary btn-lg'>
        Home
      </Link>
    </div>
  );
};

export default AboutPage;

import React from "react";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div>
      <Link to={`/createboard`}>create</Link>
    </div>
  );
}

export default HomeBanner;

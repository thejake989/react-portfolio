import React from "react";
import Friends from "../Friends";
import Buddy from "../Buddy";
import Recipe from "../Recipe";
import Card4 from "../Card4";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <span className="tags top-tags">&lt; &gt;</span>

        <span className="tags bottom-tags">
          <Friends />
          <br />
          <Recipe />
          <br />
          <Buddy />
          <br />
          <Card4 />
          <Footer />
        </span>
      </div>
    </div>
  );
};

export default Layout;

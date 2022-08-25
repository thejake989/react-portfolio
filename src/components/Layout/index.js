import React from "react";
import Friends from "../Friends";
import Buddy from "../Buddy";
import Recipe from "../Recipe";
import VotingWithFriends from "../VotingWithFriends";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="App">
      <div className="page p-4">
        <span className="tags top-tags"></span>

        <span className="tags bottom-tags">
          <h3 class="text-2xl text-gray-300 font-bold md:text-3xl">Projects</h3>
          <br />
          <VotingWithFriends />
          <br />
          <Friends />
          <br />
          <Buddy />
          <br />
          <Recipe />
          <Footer />
        </span>
      </div>
    </div>
  );
};

export default Layout;

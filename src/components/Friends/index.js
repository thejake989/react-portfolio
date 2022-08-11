import React from "react";
import "animate.css";

const Friends = () => {
  return (
    <div class=" p-6 max-w-lg rounded-lg border border-black dark:text-white bg-gradient-to-r from-cyan-500 to-blue-500">
      <a href="https://voting-with-friends.herokuapp.com/">
        <h5 class="mb-5 text-2xl font-bold tracking-tight text-black dark:text-white">
          Voting With Friends
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        This is an application that you can use with your friends, family
        members, or in large groups to help make decisions on where to go, what
        to eat, or even what concert to attend. The possibilities are endless!
      </p>
      <a
        href="https://voting-with-friends.herokuapp.com/"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Take me there
        <svg
          aria-hidden="true"
          class="ml-3 -mr-2 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Friends;

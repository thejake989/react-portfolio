import React from "react";

const Buddy = () => {
  return (
    <div class=" p-6 max-w-lg rounded-lg border border-black shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-teal-600 to-green-400 ">
      <a href="#">
        <h5 class=" mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
          RanBudday
        </h5>
      </a>
      <p class="mb-3 font-normal text-black dark:text-white-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
      </p>
      <a
        href="#"
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
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Buddy;

import React from "react";

const Recipe = () => {
  return (
    <div class="p-6 max-w-lg rounded-lg border border-black shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-indigo-600 to- bg-sky-500">
      <a href="https://matthewgrisham.github.io/project-recipe/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
          Recipe Roulette
        </h5>
      </a>
      <p class="mb-3 font-normal text-black dark:text-gray-400">
        Here is an application that can help you in the Kitchen. If you have a
        bunch of ingredients, and you aren't really sure what to cook. You can
        simply enter in the ingredients that you have in your Kitchen, and this
        application will give you a list of recipes that you can make with those
        ingredients. The links also have instructional videos as well.
      </p>
      <a
        href="https://matthewgrisham.github.io/project-recipe/"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Take me there
        <svg
          aria-hidden="true"
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Recipe;

const VotingWithFriends = () => {
  return (
    <div class="p-6 max-w-lg rounded-lg border border-black shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-sky-500 to-green-400 ">
      <a href="https://shielded-bastion-93901.herokuapp.com/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
          Voting With Friends v2.0
        </h5>
      </a>
      <p class="mb-3 font-normal text-black dark:text-white-400">
        This project was rebuilt from our original project. This time we used
        React, Vite, and Tailwindcss for the set up. You can use this app to
        help make group decisions easier.
      </p>
      <a
        href="https://shielded-bastion-93901.herokuapp.com/"
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

export default VotingWithFriends;

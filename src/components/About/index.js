import React from "react";

const About = () => {
  return (
    <div class="py-16 float-right">
      <div class="container width:20% m-auto px-6 text-gray-300 md:px-12 l:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-4">
          <div class="md:5/12 lg:w-5/12"></div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-600 font-bold md:text-4xl">
              About Me
            </h2>
            <p class="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p class="mt-4 text-gray-600">
              {" "}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

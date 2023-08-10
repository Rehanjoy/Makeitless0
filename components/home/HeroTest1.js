import React from "react";


const HeroTest1 = () => {
  return (
    <>
      <div className="relative w-full bg-white">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center px-4 lg:col-span-7 lg:gap-x-6 lg:px-6 xl:col-span-6 items-center hero-height">
      <img
        className="hero-logo w-40 h-30"
        src="https://res.cloudinary.com/dcpte972l/image/upload/v1691146713/Logo-01_1_psmvbn.png"
        alt=""
      />

      <h1 className="text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl xl:text-6xl">
        Shop Like Never Before!
      </h1>
      <p className="mt-6 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        modi blanditiis dolores quasi eaque explicabo!
      </p>
      <form
        action=""
        className="mt-6 flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      >
        <button
          type="button"
          className="rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink-400"
        >
          Shop Now{" "}
          
        </button>
      </form>
    </div>
    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
      <img
        className="rounded aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[620px] xl:aspect-[16/9]"
        src="https://res.cloudinary.com/dcpte972l/image/upload/v1690982958/Fashion_Clothing_Online_Shop_Showroom_Instagram_Post_unlhka.png"
        alt=""
      />
    </div>
  </div>
</div>;

    </>
  );
};

export default HeroTest1;

import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [DisplayShoe, setDisplayShoe] = useState(bigShoe1);
  return (
    <section
      className="w-full max-container p-2 min-h-screen flex xl:flex-row flex-col justify-center gap-10"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>
        <h1 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight}></Button>
        <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slay-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:flex hidden flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={DisplayShoe}
          alt="bigShoe"
          className="object-contain relative z-10"
        />
      </div>
      <div className="xl:flex hidden sm:gap-6 gap-4 absolute top-[18%] sm:right-[13%] max-sm:px-6">
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard
              imgUrl={shoe}
              changeBigShoeImage={(shoe) => {setDisplayShoe(shoe)}}
              bigShoeImg={DisplayShoe}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

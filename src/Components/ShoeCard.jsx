import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className={`border-coral-red rounded-xl ${bigShoeImg === imgUrl.bigShoe ? "border-2" : "border-transparent"} flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}>
        <img
          src={imgUrl.thumbnail}
          alt="shoes image"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

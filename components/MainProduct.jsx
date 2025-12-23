import React from "react";
import Image from "next/image";

export default function MainProduct({ title, description, imageUrl, price }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 p-10">
        <div className="flex flex-col relative p-5 min-h-100 w-full md:w-1/2">
          <Image src={imageUrl} alt={title} fill className="object-contain" />
        </div>
        <div className=" flex flex-col gap-5 p-5 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p>₹ {price}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

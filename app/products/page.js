"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Product = () => {
  const data = useSearchParams();
  const name = data.get("name");
  const id = data.get("id");
  return (
    <div>
      name : {name} and id : {id}
    </div>
  );
};

export default Product;

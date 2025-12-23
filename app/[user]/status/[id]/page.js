"use client";
import React from "react";
import { use } from "react";

const statusid = (props) => {
  const data = use(props.params);
  console.log(data);
  return (
    <div>
      user is : {data.user} and status is :{data.id}
    </div>
  );
};

export default statusid;

"use client";
import { use } from "react";

const UserPage = (props) => {
  const data = use(props.params);
  console.log(data);

  return <div>User Page: {data.user}</div>;
};

export default UserPage;

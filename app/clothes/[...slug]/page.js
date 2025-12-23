import React from "react";

const fashion = async (props) => {
  const { slug } = await props.params;
  console.log(slug);
  return <div>fashion</div>;
};

export default fashion;

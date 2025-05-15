import React, { useContext } from "react";
import { SharedData } from "..";

const Home = ({ data }) => {
  const sData = useContext(SharedData);
  return (
    <h1>
      This is a home page
      {sData}
    </h1>
  );
};

export default Home;
// props drilling

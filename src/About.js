import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { userInfo } = useParams();
  console.log(userInfo);
  return (
    <div>
      <h2>소개</h2>
      <p>예제 프로젝트</p>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function f() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=kr${
          category === "all" ? "" : `&category=${category}`
        }&apiKey=4144e3d02e2f425986ab4e18ae9a4d5b`
      );
      const json = await response.json();
      const news = json.articles;
      setData(news);
    }
    f();
  });
  return (
    <NewsListBlock>
      {data.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;

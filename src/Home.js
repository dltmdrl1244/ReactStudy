import React from "react";
import { useLocation } from "react-router";
import QueryString from "qs";

const Home = ({ value, onChange, onSubmit }) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange}/>
        <button onClick={onSubmit}>검색</button>
      </form>
    </div>
  );
};

export default Home;

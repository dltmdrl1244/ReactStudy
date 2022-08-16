import { useCallback, useEffect, useState } from "react";
import NewsList from "./news/NewsList";
import Categories from "./news/Categories";
const App = () => {
  const [category, setCategory] = useState("all");

  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};

export default App;

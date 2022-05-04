import { useState, useCallback, useContext, useEffect } from "react";
import { appContext } from "../../context/AppContext";
import CardList from "../../components/card/cardList";
import axios from "axios";

export const HomePage = () => {
  const { test } = useContext(appContext);
  const [nextUrl, setNextUrl] = useState();
  const [postList, setPostList] = useState([]);

  const getPostList = async (
    url = "https://clarusway-blogapp.herokuapp.com/api/list/"
  ) => {
    try {
      const result = await axios.get(url);
      setPostList([...postList, ...result?.data?.results]);
      setNextUrl(result?.data?.next);
    } catch ({ response }) {
      if (response) {
        console.log(response.data.non_field_errors[0]);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  const handleLoadMore = () => {
    getPostList(nextUrl);
  };

  if (!postList?.length) return "Loading...";

  return (
    <div>
      <CardList
        hasNext={!!nextUrl}
        loadMore={handleLoadMore}
        postList={postList}
      />
    </div>
  );
};

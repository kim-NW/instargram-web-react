import Feed from "components/Feed";
import { getAllFeeds } from "../api";
import { useQuery } from "@tanstack/react-query";

function Home() {

    const {data} = useQuery(["feeds"], getAllFeeds);
    console.log(data);

  return (
    <div>
      {/* <Feed />
      <Feed /> */}
    </div>
  )
}

export default Home
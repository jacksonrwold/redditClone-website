import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{data}] = usePostsQuery()
  
  return (<>
    <NavBar />
    <div>hello world</div>
    {/* @ts-ignore */}
    {!data ? <div>Loading...</div> : data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
  </>
  )
};

export default withUrqlClient(createUrqlClient)(Index);
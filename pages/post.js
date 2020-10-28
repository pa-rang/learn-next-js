import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

// export default (props) => (
//     <Layout>
//     	<h1>{props.url.query.title}</h1>
// 			<p>This is the blog post content.</p>
//     </Layout>
// )

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log("context", context);
  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;

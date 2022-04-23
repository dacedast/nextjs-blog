import Head from "next/head";
import { PostWidget, Categories, PostCards } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>FATED</title>
        <meta
          name="description"
          content="Blog of fated, but not yet billionaire"
        />
      </Head>
      <h1 className="text-center text-2xl font-bold mb-4 text-secondary font-display">
        Featured
      </h1>
      <FeaturedPosts />
      <h1 className="text-center text-2xl font-bold mb-4 text-secondary font-display">
        Thoughts and lessons learnt
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {posts
              .map((post, index) => <PostCards post={post.node} key={index} />)
              .reverse()}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 1,
  };
}

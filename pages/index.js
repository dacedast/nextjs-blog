import Head from "next/head";
import { PostWidget, Categories, PostCards, SearchBox } from "../components";
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
      <FeaturedPosts />
      <h1 className="text-center text-3xl font-extrabold title mb-4">
        CHRONICLES
      </h1>
      <div className="flex justify-center lg:hidden">
        <SearchBox />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts
            .map((post, index) => <PostCards post={post.node} key={index} />)
            .reverse()}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <div className="hidden lg:block">
              <SearchBox />
            </div>
            <PostWidget />
            {/* <Categories /> */}
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

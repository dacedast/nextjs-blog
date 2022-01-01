import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../services";
import {FeaturedPosts} from '../sections'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <h1 className="text-center text-3xl font-bold text-white mb-4">
          Featured
      </h1>
      <Head>
      <title>
        Fated
      </title>
      <meta name="description" content="Blog of fated, but not yet billionaire"/>
    </Head>
      <FeaturedPosts />
      <h1 className="text-center text-3xl font-bold text-white mb-4">
          Chronicles
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          )).reverse()}
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
    revalidate: 1
  };
}

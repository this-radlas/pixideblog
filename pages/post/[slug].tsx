import React from "react";
import { getPosts, getPostDetails } from "../../services";
import { PostDetail, Categories, Author, PostWidget } from "../../components";

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto px-5 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post} />
          {post.author && <Author author={post.author} />}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {post.categories && <Categories categories={post.categories} />}
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

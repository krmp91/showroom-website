import { getPostSingle } from "@/services/project";
import Link from "next/link";
export default async function ProjectSingle({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostSingle(params.slug);
  return (
    <main>
      {post && (
        <>
          <h1>{post.title.rendered}</h1>
          <h2>Posted on {new Date(post.date).toLocaleDateString()}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </>
      )}
      {!post && (
        <>
          <h1>404</h1>
          <p>Post not found.</p>
        </>
      )}
      <Link href="/projects">Back to Archive</Link>
    </main>
  );
}
/*import { Suspense } from "react";
import Loading from "../../loading";

async function getPost(slug: any) {
  const query = `
  query GetPostBySlug($uri: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      
    }
  }
      `;

  const variables = {
    slug,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.post) {
    return responseBody.data.post;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

export default async function PostDetails({ params }) {
  const post = await getPost(params.slug);

  return (
    <main>
      <nav>
        <h1>{post.title}</h1>
      </nav>
      <Suspense fallback={<Loading />}>
        <div className="card" key={post.slug}>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Suspense>
    </main>
  );
}*/

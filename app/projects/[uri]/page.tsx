import { Suspense } from "react";
import Loading from "../../loading";

async function getProject(uri: any) {
  const query = `
  query GetProjectByUri($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
      
    }
  }
      `;

  const variables = {
    uri,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "PROJECTS",
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
    throw new Error("Failed to fetch the project");
  }
}

export default async function ProjectDetails({ params }) {
  const post = await getProject(params.uri);

  return (
    <main>
      <nav>
        <h1>{post.title}</h1>
      </nav>
      <Suspense fallback={<Loading />}>
        <div key={post.uri}>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Suspense>
    </main>
  );
}

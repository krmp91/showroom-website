import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
import Image from "next/image";

async function getPosts() {
  const query = `
  {
    posts {
      nodes {
        title
        content
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
  `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  const { data } = await res.json();

  // Filter posts that belong to the 'projects' category
  const posts = data.posts.nodes.filter(
    (post: { categories: { nodes: { name: string }[] } }) =>
      post.categories.nodes.some(
        (category: { name: string }) => category.name === "projects"
      )
  );

  return posts;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.uri}>
          <Suspense fallback={<Loading />}>
            <Link href={`/post/${post.uri}`}>
              <h3>{post.title}</h3>
              {post.featuredImage && post.featuredImage.node && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  width={500} // Set your desired width
                  height={300} // Set your desired height
                  layout="fixed" // or 'fill', depending on your requirement
                />
              )}
              <p
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 200) + "...",
                }}
              />
            </Link>
          </Suspense>
        </div>
      ))}
    </div>
  );
}

/*import React from "react";
import type { Metadata } from "next";
import getAllProjects from "@/lib/getAllPosts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectPage() {
  const projectsData: Promise<Posts[]> = getAllProjects();

  const projects = await projectsData;

  return (
    <div>
      {projects.map((project) => {
        return (
          <>
            <p key={project.title}>
              <Link href={`/projects/${project.title}`}>{project.title}</Link>{" "}
            </p>
          </>
        );
      })}
    </div>
  );
}

/*import React from "react";

export default function Projects({ posts }) {
  console.log({ posts });
  return;
  <div>
    <h1>Hello projects is here</h1>;
  </div>;
}
export async function getStaticProps() {
  const res = await fetch("https://headless-cms.louiseravnloekke.dk/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query ProjectPageQuery {
        posts {
          nodes {
            slug
            title
            featuredImage {
              node {
                id
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      } 
      `,
    }),
  });
  const json = await res.json();

  return {
    pages: {
      props: {
        posts: json.data.posts,
      },
    },
  };
}
*/

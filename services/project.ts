import { PROJECT_ENDPOINT, PROJECT_ENDPOINT_SINGLE } from "./endpoints";
import { ProjectPost } from "@/interfaces/project";

export const getPostArchive = async () => {
  const response = await fetch(PROJECT_ENDPOINT, {
    next: { revalidate: 60 },
  });
  const data: ProjectPost[] = await response.json();
  return data;
};

export const getPostSingle = async (slug: string) => {
  const response = await fetch(PROJECT_ENDPOINT_SINGLE + slug, {
    next: { revalidate: 60 },
  });
  const data: ProjectPost[] = await response.json();
  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
};

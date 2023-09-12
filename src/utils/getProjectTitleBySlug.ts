import projects from "@/data/projects";

export default function getProjectTitleBySlug(slug: string): string | undefined {
  const project = projects.find(p => p.link === slug);
  return project?.title;
}
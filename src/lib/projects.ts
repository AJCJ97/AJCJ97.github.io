import { getCollection } from 'astro:content';

/** All projects, in the order set by each file's `order` frontmatter. */
export async function getProjects() {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => a.data.order - b.data.order);
}

export function projectUrl(slug: string) {
	return `${import.meta.env.BASE_URL}projects/${slug}/`;
}

import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getProjects } from '../lib/projects';

export async function GET(context) {
	const projects = await getProjects();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: projects.map((project) => ({
			title: project.data.title,
			description: project.data.description,
			pubDate: project.data.pubDate,
			// Relative to `site`
			link: `projects/${project.slug}/`,
		})),
	});
}

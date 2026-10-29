import { defineCollection, z } from 'astro:content';

// Each project lives in src/content/projects/<slug>/index.md.
// The home page and /projects/ build their cards from this frontmatter.
const projects = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// Short label shown above the title, e.g. "Business Intelligence"
			category: z.string(),
			// Tools used; shown as chips on cards and project pages
			tags: z.array(z.string()).default([]),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			// Source code link shown on the project page
			repo: z.string().url().optional(),
			// Featured projects get the large alternating layout on the home page
			featured: z.boolean().default(false),
			order: z.number().default(99),
		}),
});

export const collections = { projects };

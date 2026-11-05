import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const chargers = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/chargers' }),
	schema: z.object({
		title: z.string(),
		brand: z.string(),
		model: z.string(),
		slug: z.string(),
		summary: z.string(),
		amperage: z.string(),
		connector: z.enum(['NACS', 'J1772', 'both']),
		smart: z.boolean(),
		approxPriceUsd: z.number().nullable(),
		verdict: z.string(),
		sources: z.array(
			z.object({
				label: z.string(),
				url: z.string().url(),
			}),
		),
		lastUpdated: z.coerce.date(),
		affiliateDisclosure: z.boolean(),
		buyUrl: z.string().url().optional(),
	}),
});

export const collections = { chargers };

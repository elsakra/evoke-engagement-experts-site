import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    features: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const pricingPlans = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    billingPeriod: z.enum(['monthly', 'yearly', 'one-time']).optional(),
    features: z.array(z.string()).min(1),
    highlighted: z.boolean().default(false),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    content: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string().optional(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  services,
  'pricing-plans': pricingPlans,
  testimonials,
  blog,
  faq,
};

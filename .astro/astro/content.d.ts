declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"a-new-year-doesnt-require-a-whole-new-you.md": {
	id: "a-new-year-doesnt-require-a-whole-new-you.md";
  slug: "a-new-year-doesnt-require-a-whole-new-you";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cultivating-generosity-steps-to-successful-campaign.md": {
	id: "cultivating-generosity-steps-to-successful-campaign.md";
  slug: "cultivating-generosity-steps-to-successful-campaign";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"email-marketing-matters-more-than-ever.md": {
	id: "email-marketing-matters-more-than-ever.md";
  slug: "email-marketing-matters-more-than-ever";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"from-trend-to-tradition-making-inclusive-communication-the-norm.md": {
	id: "from-trend-to-tradition-making-inclusive-communication-the-norm.md";
  slug: "from-trend-to-tradition-making-inclusive-communication-the-norm";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-use-photos-to-engage-your-audience.md": {
	id: "how-to-use-photos-to-engage-your-audience.md";
  slug: "how-to-use-photos-to-engage-your-audience";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"meet-the-team-kelly-emilys-journey.md": {
	id: "meet-the-team-kelly-emilys-journey.md";
  slug: "meet-the-team-kelly-emilys-journey";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"print-marketing-save-creation-and-your-budget.md": {
	id: "print-marketing-save-creation-and-your-budget.md";
  slug: "print-marketing-save-creation-and-your-budget";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-revamp-of-an-energetic-church-community.md": {
	id: "the-revamp-of-an-energetic-church-community.md";
  slug: "the-revamp-of-an-energetic-church-community";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"where-did-the-young-families-go.md": {
	id: "where-did-the-young-families-go.md";
  slug: "where-did-the-young-families-go";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-every-nonprofit-should-utilize-project-management-tools.md": {
	id: "why-every-nonprofit-should-utilize-project-management-tools.md";
  slug: "why-every-nonprofit-should-utilize-project-management-tools";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"faq": {
"migration.md": {
	id: "migration.md";
  slug: "migration";
  body: string;
  collection: "faq";
  data: InferEntrySchema<"faq">
} & { render(): Render[".md"] };
"security.md": {
	id: "security.md";
  slug: "security";
  body: string;
  collection: "faq";
  data: InferEntrySchema<"faq">
} & { render(): Render[".md"] };
};
"pricing-plans": {
"enterprise.md": {
	id: "enterprise.md";
  slug: "enterprise";
  body: string;
  collection: "pricing-plans";
  data: InferEntrySchema<"pricing-plans">
} & { render(): Render[".md"] };
"pro.md": {
	id: "pro.md";
  slug: "pro";
  body: string;
  collection: "pricing-plans";
  data: InferEntrySchema<"pricing-plans">
} & { render(): Render[".md"] };
"starter.md": {
	id: "starter.md";
  slug: "starter";
  body: string;
  collection: "pricing-plans";
  data: InferEntrySchema<"pricing-plans">
} & { render(): Render[".md"] };
};
"services": {
"fundraising-strategies.md": {
	id: "fundraising-strategies.md";
  slug: "fundraising-strategies";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"ongoing-communication-partner.md": {
	id: "ongoing-communication-partner.md";
  slug: "ongoing-communication-partner";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"planning-strategy.md": {
	id: "planning-strategy.md";
  slug: "planning-strategy";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"secret-visitor-digital-assessment.md": {
	id: "secret-visitor-digital-assessment.md";
  slug: "secret-visitor-digital-assessment";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"social-media-marketing-management.md": {
	id: "social-media-marketing-management.md";
  slug: "social-media-marketing-management";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"visual-identity-refresh.md": {
	id: "visual-identity-refresh.md";
  slug: "visual-identity-refresh";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"website-design-management.md": {
	id: "website-design-management.md";
  slug: "website-design-management";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
};
"testimonials": {
"karen-heitmann.md": {
	id: "karen-heitmann.md";
  slug: "karen-heitmann";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"pastor-nicole-eastwood.md": {
	id: "pastor-nicole-eastwood.md";
  slug: "pastor-nicole-eastwood";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"theresa-hanger.md": {
	id: "theresa-hanger.md";
  slug: "theresa-hanger";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}

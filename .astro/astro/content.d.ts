declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

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
"best-ai-tools/best-ai-image-models-2026.mdx": {
	id: "best-ai-tools/best-ai-image-models-2026.mdx";
  slug: "best-ai-tools/best-ai-image-models-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"best-ai-tools/best-ai-side-hustles-2025.mdx": {
	id: "best-ai-tools/best-ai-side-hustles-2025.mdx";
  slug: "best-ai-tools/best-ai-side-hustles-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"best-ai-tools/best-free-ai-tools-2025.mdx": {
	id: "best-ai-tools/best-free-ai-tools-2025.mdx";
  slug: "best-ai-tools/best-free-ai-tools-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"best-ai-tools/i-tried-289-ai-tools.mdx": {
	id: "best-ai-tools/i-tried-289-ai-tools.mdx";
  slug: "best-ai-tools/i-tried-289-ai-tools";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"best-ai-tools/the-agentic-shift.mdx": {
	id: "best-ai-tools/the-agentic-shift.mdx";
  slug: "best-ai-tools/the-agentic-shift";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"comparisons/stop-using-chatgpt-2025.mdx": {
	id: "comparisons/stop-using-chatgpt-2025.mdx";
  slug: "comparisons/stop-using-chatgpt-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"comparisons/stop-wasting-money-top-6-all-in-one-ai-tools-2025.mdx": {
	id: "comparisons/stop-wasting-money-top-6-all-in-one-ai-tools-2025.mdx";
  slug: "comparisons/stop-wasting-money-top-6-all-in-one-ai-tools-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"news/ai-news-openai-code-red-apple-clara-2025.mdx": {
	id: "news/ai-news-openai-code-red-apple-clara-2025.mdx";
  slug: "news/ai-news-openai-code-red-apple-clara-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"news/apple-claraara-ai.mdx": {
	id: "news/apple-claraara-ai.mdx";
  slug: "news/apple-claraara-ai";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"news/geoffrey-hinton-ai-warning-2025.mdx": {
	id: "news/geoffrey-hinton-ai-warning-2025.mdx";
  slug: "news/geoffrey-hinton-ai-warning-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"news/titans-memory-architecture.mdx": {
	id: "news/titans-memory-architecture.mdx";
  slug: "news/titans-memory-architecture";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"prompt-engineering/master-prompt-engineering-2025.mdx": {
	id: "prompt-engineering/master-prompt-engineering-2025.mdx";
  slug: "prompt-engineering/master-prompt-engineering-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"prompt-engineering/you-suck-at-prompting-2025.mdx": {
	id: "prompt-engineering/you-suck-at-prompting-2025.mdx";
  slug: "prompt-engineering/you-suck-at-prompting-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"learn": {
"ai-basics/module-1/1-1-what-is-ai.mdx": {
	id: "ai-basics/module-1/1-1-what-is-ai.mdx";
  slug: "ai-basics/module-1/1-1-what-is-ai";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-10-your-first-ai-project.mdx": {
	id: "ai-basics/module-1/1-10-your-first-ai-project.mdx";
  slug: "ai-basics/module-1/1-10-your-first-ai-project";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-2-why-now.mdx": {
	id: "ai-basics/module-1/1-2-why-now.mdx";
  slug: "ai-basics/module-1/1-2-why-now";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-3-history.mdx": {
	id: "ai-basics/module-1/1-3-history.mdx";
  slug: "ai-basics/module-1/1-3-history";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-4-types-of-ai.mdx": {
	id: "ai-basics/module-1/1-4-types-of-ai.mdx";
  slug: "ai-basics/module-1/1-4-types-of-ai";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-5-secret-life-of-ai.mdx": {
	id: "ai-basics/module-1/1-5-secret-life-of-ai.mdx";
  slug: "ai-basics/module-1/1-5-secret-life-of-ai";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-6-ai-vs-ml-vs-dl.mdx": {
	id: "ai-basics/module-1/1-6-ai-vs-ml-vs-dl.mdx";
  slug: "ai-basics/module-1/1-6-ai-vs-ml-vs-dl";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-7-neural-networks.mdx": {
	id: "ai-basics/module-1/1-7-neural-networks.mdx";
  slug: "ai-basics/module-1/1-7-neural-networks";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-8-ai-in-real-world.mdx": {
	id: "ai-basics/module-1/1-8-ai-in-real-world.mdx";
  slug: "ai-basics/module-1/1-8-ai-in-real-world";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"ai-basics/module-1/1-9-myths-about-ai.mdx": {
	id: "ai-basics/module-1/1-9-myths-about-ai.mdx";
  slug: "ai-basics/module-1/1-9-myths-about-ai";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"machine-learning/module-2/2-1-what-is-ml.mdx": {
	id: "machine-learning/module-2/2-1-what-is-ml.mdx";
  slug: "machine-learning/module-2/2-1-what-is-ml";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"machine-learning/module-2/2-2-why-ml-matters.mdx": {
	id: "machine-learning/module-2/2-2-why-ml-matters.mdx";
  slug: "machine-learning/module-2/2-2-why-ml-matters";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"machine-learning/module-2/2-3-history-of-ml.mdx": {
	id: "machine-learning/module-2/2-3-history-of-ml.mdx";
  slug: "machine-learning/module-2/2-3-history-of-ml";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"machine-learning/module-2/2-4-ml-vs-traditional.mdx": {
	id: "machine-learning/module-2/2-4-ml-vs-traditional.mdx";
  slug: "machine-learning/module-2/2-4-ml-vs-traditional";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"machine-learning/module-2/2-5-why-ml-works.mdx": {
	id: "machine-learning/module-2/2-5-why-ml-works.mdx";
  slug: "machine-learning/module-2/2-5-why-ml-works";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
"machine-learning/module-2/2-6-types-of-ml.mdx": {
	id: "machine-learning/module-2/2-6-types-of-ml.mdx";
  slug: "machine-learning/module-2/2-6-types-of-ml";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}

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
"best-ai-tools/3-best-free-ai-video-generators-with-sound-2025.mdx": {
	id: "best-ai-tools/3-best-free-ai-video-generators-with-sound-2025.mdx";
  slug: "best-ai-tools/3-best-free-ai-video-generators-with-sound-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
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
"best-ai-tools/i-tested-750-ai-tools-2025.mdx": {
	id: "best-ai-tools/i-tested-750-ai-tools-2025.mdx";
  slug: "best-ai-tools/i-tested-750-ai-tools-2025";
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
"comparisons/final-round-vs-lockedin-ai-interview-tool-comparison-2025.mdx": {
	id: "comparisons/final-round-vs-lockedin-ai-interview-tool-comparison-2025.mdx";
  slug: "comparisons/final-round-vs-lockedin-ai-interview-tool-comparison-2025";
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
"news/ai-news-gpt-5-2-real-time.mdx": {
	id: "news/ai-news-gpt-5-2-real-time.mdx";
  slug: "news/ai-news-gpt-5-2-real-time";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"news/ai-news-gpt5-2-disney-openai-runway-2025.mdx": {
	id: "news/ai-news-gpt5-2-disney-openai-runway-2025.mdx";
  slug: "news/ai-news-gpt5-2-disney-openai-runway-2025";
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
"news/ai-news-this-week-2025-image-models-audio-video.mdx": {
	id: "news/ai-news-this-week-2025-image-models-audio-video.mdx";
  slug: "news/ai-news-this-week-2025-image-models-audio-video";
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

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}

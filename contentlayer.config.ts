import fs from "fs";
import path from "path";

import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const getLocale = (doc: any) => {
  const pathParts = doc._raw.sourceFilePath.split('/');

  // For localized content: en/blog/post.mdx, vi/project/post.mdx, etc.
  if (pathParts[1] === 'blog') {
    return pathParts[0];
  }
  if (pathParts[1] === 'project') {
    return pathParts[0];
  }
  if (pathParts[1] === 'milestone') {
    return pathParts[0];
  }

  return 'en';
};

const blogComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  locale: {
    type: "string",
    resolve: (doc) => getLocale(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => {
      const imagePath = path.join(
        process.cwd(),
        "public",
        "blog",
        // `${getSlug(doc)}/image.png`,
        `${getSlug(doc)}/image.png`,

      );
      return fs.existsSync(imagePath)
        ? `/${getLocale(doc)}/blog/${getSlug(doc)}/image.png`
        : null;
    },
  },
  og: {
    type: "string",
    resolve: (doc) => `/${getLocale(doc)}/blog/${getSlug(doc)}/image.png`,
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: blogComputedFields,
}));

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  locale: {
    type: "string",
    resolve: (doc) => getLocale(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc);
      const locale = getLocale(doc);
      const sharedCoverPath = path.join(
        process.cwd(),
        "public",
        "projects",
        slug,
        `${slug}-cover.webp`,
      );

      return fs.existsSync(sharedCoverPath)
        ? `/projects/${slug}/${slug}-cover.webp`
        : `/${locale}/projects/${slug}/image.png`;
    },
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "**/project/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    longSummary: { type: "string", required: false },
    date: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: projectComputedFields,
}));

const milestoneComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  locale: {
    type: "string",
    resolve: (doc) => getLocale(doc),
  },
};

export const Milestone = defineDocumentType(() => ({
  name: "Milestone",
  filePathPattern: "**/milestone/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "string", required: true },
    displayDate: { type: "string", required: false },
    year: { type: "string", required: true },
    category: { type: "string", required: true },
    action: { type: "string", required: false },
    href: { type: "string", required: false },
    detail: { type: "boolean", required: false },
    heroImage: { type: "string", required: false },
    routeImage: { type: "string", required: false },
    detailLayout: { type: "string", required: false },
    statsTitle: { type: "string", required: false },
    stats: { type: "json", required: false },
  },
  computedFields: milestoneComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project, Milestone],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});

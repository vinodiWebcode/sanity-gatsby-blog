import { format, isFuture } from "date-fns";

export function cn(...args: any[]) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data: { edges: any[] }) {
  if (!data.edges) return [];
  return data.edges.map((edge: { node: any }) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(new Date(publishedAt));
}

export function getBlogUrl(
  publishedAt: string | number | Date,
  slug: { current: any }
) {
  return `/blog/${format(new Date(publishedAt), "yyyy/MM")}/${
    slug.current || slug
  }/`;
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function toPlainText(blocks: any[]) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block: { _type: string; children: any[] }) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child: { text: any }) => child.text).join("");
    })
    .join("\n\n");
}

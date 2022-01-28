/* eslint-disable import/no-unresolved */
import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
  keywords: string;
  image: any;
}

function SEO({
  description = "",
  lang = "en",
  meta = [],
  title,
  keywords,
  image,
}: SEOProps) {
  // function SEO({ description, lang, meta, keywords, title, image }) {

  const detailsQuery = graphql`
    query DefaultSEOQuery {
      site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
        title
        description
        keywords
        author {
          name
        }
      }
    }
  `;
  const { site } = useStaticQuery(detailsQuery) || {};

  const metaDescription: string = description || site.description || "";
  const siteTitle: string = site.title || "";
  const siteAuthor: string = site.author?.name || "";
  const metaImage = image?.asset
    ? imageUrlFor(buildImageObj(image)).width(1200).url()
    : "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

// SEO.defaultProps = {
//   lang: "en",
//   meta: [],
//   keywords: [],
// };

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// };

export default SEO;

// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
//       title
//       description
//       keywords
//       author {
//         name
//       }
//     }
//   }
// `;

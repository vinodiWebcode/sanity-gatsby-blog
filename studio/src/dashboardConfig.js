export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "61f38ca6b9b09f509d330d5a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uwsz149o",
                  apiId: "e4707cfc-89c9-416b-aa37-0d9cd58ff340",
                },
                {
                  buildHookId: "61f38ca674a49458e18834f4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-v5rcqtjg",
                  apiId: "c9e092ab-2e78-4dc4-a762-add7b2443baf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/vinodiWebcode/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-v5rcqtjg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

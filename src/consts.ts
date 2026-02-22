import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Yunan Zhang | CS PhD Student",
  DESCRIPTION: "Personal academic website of a Computer Science PhD student.",
  EMAIL: "zhan4404@purdue.edu",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 5,
  SITEURL: "https://your-domain.com", // Update to your production domain for RSS and SEO.
};

export const HIGHLIGHTAUTHOR = "Yunan Zhang";

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Research overview and recent publications.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Education and experience.",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION: "Background and interests.",
};

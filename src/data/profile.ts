export const PROFILE = {
  name: "Yunan Zhang",
  nativeName: "张宇楠",
  title: "CS PhD Student",
  shortBio: "Ph.D. Student @ Purdue University",
  affiliation: "Purdue University, West Lafayette",
  location: "West Lafayette, IN",
  profileImage: {
    src: "/astro-micro.jpg",
    alt: "Portrait photo",
  },
  announcement:
    "I am actively working on vector search and vector database systems, including filtered vector search and disk-based indexing.",
  intro: [
    "I am a Ph.D. student in Computer Science at Purdue University, advised by Prof. Jianguo Wang.",
    "My research focuses on vector search systems, including filtered vector search and disk-based indexing.",
    "I am currently working on Filtered Vector Search on DiskANN with Microsoft Research and Purdue University.",
  ],
  // focusTags: [
  //   "Vector Search",
  //   "Vector Databases",
  //   "DiskANN",
  // ],
  newsItems: [
    {
      date: "Jun 2025 - Now",
      text: "Working on filtered vector search strategy for DiskANN at Microsoft Research.",
      tags: ["paper"],
    },
    {
      date: "Jun 2024 - Now",
      text: "DiskV: disk-based vector search on commodity storage (submitted to VLDB 2026 as first author).",
      tags: ["project"],
    },
    {
      date: "Jun 2025 - Aug 2025",
      text: "Research Scientist Intern, Microsoft Research (Azure DiskANN team).",
      tags: ["internship"],
    },
    {
      date: "2024",
      text: "Published first-author work in ICDE 2024.",
      tags: ["publication"],
    },
  ],
  researchSummary:
    "My research explores efficient and practical vector search systems across different storage devices and real-world workloads.",
  researchThemes: [
    {
      title: "Filtered Vector Search",
      description:
        "Developing search strategies adaptable to varying query selectivities and predicate cardinalities in DiskANN.",
    },
    {
      title: "Disk-Based Vector Search Systems",
      description:
        "Designing and optimizing disk-based vector indices for high performance on commodity storage, including HDDs and SSDs.",
    },
    {
      title: "Generalized vs. Specialized Vector Databases",
      description:
        "Analyzing index build/search tradeoffs and closing the performance gap between generalized and specialized vector databases.",
    },
  ],
  about: {
    paragraphs: [
      "I am a Ph.D. student in Computer Science at Purdue University. My research centers on vector search and vector database systems.",
      "I received my M.S. in Computer Science from Purdue University (2021-2023), and I continue to work on practical and scalable search systems for real-world deployments.",
    ],
    photos: [
      {
        src: "/astro-nano.png",
        alt: "Personal photo 1",
        caption: "Replace this with a personal photo and caption.",
        width: 350,
        height: 250,
        className:
          "bg-neutral-300 w-[350px] h-[250px] object-cover rounded-xl -rotate-6 overflow-hidden",
      },
      {
        src: "/astro-micro.jpg",
        alt: "Personal photo 2",
        caption: "Optional second photo.",
        width: 150,
        height: 250,
        className:
          "bg-neutral-300 w-[150px] h-[250px] object-cover rounded-xl rotate-6 mx-auto sm:ml-auto",
      },
    ],
  },
  cv: {
    works: [
      {
        company: "Microsoft Research",
        time: "Jun 2025 - Aug 2025",
        job_title: "Research Scientist Intern",
        location: "Redmond, WA",
        description:
          "Interned on the Azure DiskANN team. Built a filtered vector search strategy for DiskANN and created an internal dataset for filtered vector search.",
      },
      {
        company: "Purdue University",
        time: "Jun 2024 - Now",
        job_title: "Research Project: DiskV",
        location: "West Lafayette, IN",
        description:
          "Developing disk-based vector search on commodity storage. DiskV outperforms multiple disk-based vector databases with strong build/search efficiency.",
      },
    ],
    educations: [
      {
        school: "Purdue University",
        time: "Aug 2023 - 2027 (Expected)",
        job_title: "PhD in Computer Science",
        location: "West Lafayette, IN",
        description: "Advisor: Prof. Jianguo Wang.",
      },
      {
        school: "Purdue University",
        time: "Jun 2021 - May 2023",
        job_title: "M.S. in Computer Science",
        location: "West Lafayette, IN",
        description: "",
      },
    ],
  },
  socialLinks: {
    x: "#",
    github: "https://github.com/YunanZzz",
    linkedin: "https://www.linkedin.com/in/yunan-zhang-641351183/",
    email: "mailto:zhan4404@purdue.edu",
    scholar: "https://scholar.google.com/citations?user=jJVv2YwAAAAJ&hl=en",
  },
} as const;
